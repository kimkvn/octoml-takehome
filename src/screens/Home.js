import React from "react";
import HardwareTargets from "../components/HardwareTargets";
import BenchmarkAccordion from "../components/BenchmarkAccordion";
import AccelerateAccordion from "../components/AccelerateAccordion";
import { List, ListItem, makeStyles } from "@material-ui/core/";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TotalRuns from "../components/TotalRuns";

const url = "http://netheria.takehome.octoml.ai";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    flexDirection: "column",
  },
}));

const initialBenchmarkFormData = {
  engine: "",
  hardware: {},
  num_trials: 0,
  runs_per_trial: 0,
};

const initialAccelerateFormData = {
  engine: "",
  hardware: {},
};

const Home = () => {
  const classes = useStyles();
  const [isLoading, setLoading] = React.useState(true);
  const [rawHardwareData, setRawHardwareData] = React.useState({});
  const [hardwareTargets, setHardwareTargets] = React.useState(null);
  const [allInstances, setAllInstances] = React.useState([]);
  const [currentTargets, setCurrentTargets] = React.useState([]);
  const [requestBenchmark, setRequestBenchmark] = React.useState(false);
  const [requestAcceleration, setRequestAcceleration] = React.useState(false);
  const [benchmarkOptions, setBenchmarkOptions] = React.useState(
    initialBenchmarkFormData
  );
  const [accelerateOptions, setAccelerateOptions] = React.useState(
    initialAccelerateFormData
  );

  async function fetchHardwareTargets() {
    try {
      let res = await fetch(`${url}/hardware`, {
        method: "GET",
        // mode: "no-cors",
      });
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }

  async function assembleHardwareTargetsData() {
    let data = await fetchHardwareTargets();

    setRawHardwareData(data);
    let final = {};

    const addProviderInstance = (target) => {
      final[target.provider].instances[target.instance] = {
        name: target.instance,
        cpu: target.cpu,
        memory: target.memory,
      };
      setAllInstances((prevInstances) => [...prevInstances, target.instance]);
    };

    data.forEach((target) => {
      if (final[target.provider]) {
        addProviderInstance(target);
      } else {
        final[target.provider] = {
          instances: {},
        };
        addProviderInstance(target);
      }
    });
    setHardwareTargets(final);
    setLoading(false);
  }

  React.useEffect(() => {
    assembleHardwareTargetsData();
  }, []);

  const handleUpdateCurrentTargets = (data) => setCurrentTargets(data);

  const handleUpdateBenchmarkOptions = (data) => setBenchmarkOptions(data);

  const handleUpdateAccelerateOptions = (data) => setAccelerateOptions(data);

  async function postOctomize() {
    try {
      let res = await fetch(`${url}/benchmark`, {
        method: "POST",
        body: JSON.stringify(benchmarkOptions),
        // headers: {
        //   "Content-Type": "application/json",
        // },
        mode: "no-cors",
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  const handleClickOctomize = () => {
    postOctomize();
  };

  return (
    <Box className={classes.box}>
      <header>
        <h2>Shufflenet-v2.onnx</h2>
        <p>Created three days ago by Mike Johnson</p>
      </header>
      <Grid container justifyContent={"center"} spacing={2}>
        <Grid item md={9}>
          <Card>
            <CardHeader title="Octomize" />
            <CardContent>
              <section>
                {isLoading ? (
                  <h1>LOADING</h1>
                ) : (
                  <>
                    <BenchmarkAccordion
                      hardwareData={rawHardwareData}
                      updateBenchmarkOptions={handleUpdateBenchmarkOptions}
                      confirmBenchmarkRequest={(bool) =>
                        setRequestBenchmark(bool)
                      }
                    />
                    <AccelerateAccordion
                      formData={accelerateOptions}
                      updateAccelerateOptions={handleUpdateAccelerateOptions}
                      hardwareData={rawHardwareData}
                      confirmAccelerateRequest={(bool) =>
                        setRequestAcceleration(bool)
                      }
                    />
                  </>
                )}
              </section>
              <section>
                <div className="targetsList">
                  {isLoading ? (
                    <h1>LOADING</h1>
                  ) : (
                    <HardwareTargets
                      currentTargets={currentTargets}
                      hardwareTargets={hardwareTargets}
                      allInstances={allInstances}
                      updateCurrentTargets={handleUpdateCurrentTargets}
                    />
                  )}
                </div>
              </section>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <TotalRuns
            currentTargets={currentTargets}
            runBenchmark={requestBenchmark}
            runAcceleration={requestAcceleration}
            clickOctomize={handleClickOctomize}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
