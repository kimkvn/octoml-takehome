import React from "react";
import HardwareTargets from "../components/HardwareTargets";
import { makeStyles, useTheme } from "@material-ui/core/";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    flexDirection: "column",
  },
  accordionSummary: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [hardwareTargets, setHardwareTargets] = React.useState(null);
  const [allInstances, setAllInstances] = React.useState([]);
  const [currentTargets, setCurrentTargets] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [checked, setChecked] = React.useState({
    benchmark: false,
    accelerate: false,
  });

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

  const handleChangeCheck = (event) => {
    event.stopPropagation();
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  const handleUpdateCurrentTargets = (data) => setCurrentTargets(data);

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
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked.benchmark}
                          onClick={handleChangeCheck}
                          name="benchmark"
                          color="primary"
                        />
                      }
                    />
                    <div className={classes.accordionSummary}>
                      <b>Benchmark</b>{" "}
                      <p>This is some sub content to explain benchmarking</p>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>whoa details neato</AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked.accelerate}
                          onClick={handleChangeCheck}
                          name="accelerate"
                          color="primary"
                        />
                      }
                    />
                    <div className={classes.accordionSummary}>
                      <b>Accelerate</b>
                      <p>
                        Make your models go <i>fast</i>
                      </p>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>I'm fast af boi</AccordionDetails>
                </Accordion>
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
          <Card>Total Runs</Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
