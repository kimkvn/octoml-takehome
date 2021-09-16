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

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    flexDirection: "column",
  },
  accordionSummary: {
    display: "flex",
    flexDirection: "column",
  },
  totalRunsHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
  },
  totalRunsItem: {
    display: "flex",
    justifyContent: "space-between",
  },
  totalRunsTargetInfo: {},
  totalRunsGreen: {
    color: "#4DB396",
  },
}));

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
  const [accelerateOptions, setAccelerateOptions] = React.useState(
    initialAccelerateFormData
  );

  async function fetchHardwareTargets() {
    const url = "http://netheria.takehome.octoml.ai/hardware";
    try {
      let res = await fetch(url, {
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

  const handleUpdateAccelerateOptions = (data) => setAccelerateOptions(data);

  const handleClickOctomize = () => console.log("OCTOMIZE ME CAPTAIN");

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
                    <BenchmarkAccordion hardwareData={rawHardwareData} />
                    <AccelerateAccordion
                      formData={accelerateOptions}
                      updateAccelerateOptions={handleUpdateAccelerateOptions}
                      hardwareData={rawHardwareData}
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
          <Card>
            <header className={classes.totalRunsHeader}>
              Total Runs:{" "}
              <h3 className={classes.totalRunsGreen}>
                {currentTargets.length}
              </h3>
            </header>
            <List>
              {currentTargets.map((target) => {
                if (target.instance !== null) {
                  return (
                    <ListItem key={target.id} className={classes.totalRunsItem}>
                      <div className={classes.totalRunsTargetInfo}>
                        <b>{target.instance}</b>
                        <p>{target.cpu} cores</p>
                      </div>
                      <p className={classes.totalRunsGreen}>1</p>
                    </ListItem>
                  );
                } else {
                  return null;
                }
              })}
            </List>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClickOctomize}
              disabled={currentTargets.length === 0}
            >
              Octomize
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
