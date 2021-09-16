import React from "react";
import HardwareTargets from "../components/HardwareTargets";
import {
  InputLabel,
  List,
  ListItem,
  makeStyles,
  MenuItem,
  TextField,
} from "@material-ui/core/";
import Box from "@material-ui/core/Box";
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
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
  const [benchmarkEngine, setBenchmarkEngine] = React.useState("");
  const [benchmarkError, setBenchmarkError] = React.useState(true);
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

  const handleSelectBenchmarkEngine = (event) =>
    setBenchmarkEngine(event.target.value);

  const handleTextfieldChange = (event) => {
    if (!event.target.value.match(/^[0-9]*$/)) {
      setBenchmarkError(true);
    } else {
      setBenchmarkError(false);
    }
  };

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
                  <AccordionDetails>
                    <form>
                      <FormControl variant="outlined">
                        <InputLabel htmlFor={"engine-dropdown"}>
                          Engine
                        </InputLabel>
                        <Select
                          labelId="engine-dropdown"
                          id="engine-dropdown"
                          value={benchmarkEngine}
                          onChange={handleSelectBenchmarkEngine}
                        >
                          {" "}
                          <MenuItem value={"onyx"}>Onyx</MenuItem>
                          <MenuItem value={"tvm"}>TVM</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField
                        id="outlined-basic"
                        label="Number of Trials"
                        variant="outlined"
                        error={benchmarkError}
                        helperText={
                          benchmarkError ? "Input must be a valid number" : ""
                        }
                        onChange={handleTextfieldChange}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Runs per Trials"
                        variant="outlined"
                        error={benchmarkError}
                        helperText={
                          benchmarkError ? "Input must be a valid number" : ""
                        }
                        onChange={handleTextfieldChange}
                      />
                    </form>
                  </AccordionDetails>
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
                  <AccordionDetails>
                    <form>
                      <FormControl variant="outlined">
                        <InputLabel htmlFor={"engine-dropdown"}>
                          Engine
                        </InputLabel>
                        <Select
                          labelId="engine-dropdown"
                          id="engine-dropdown"
                          value={benchmarkEngine}
                          onChange={handleSelectBenchmarkEngine}
                        >
                          {" "}
                          <MenuItem value={"onyx"}>Onyx</MenuItem>
                          <MenuItem value={"tvm"}>TVM</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField
                        id="outlined-basic"
                        label="Number of Trials"
                        variant="outlined"
                        error={benchmarkError}
                        helperText={
                          benchmarkError ? "Input must be a valid number" : ""
                        }
                        onChange={handleTextfieldChange}
                      />
                    </form>
                  </AccordionDetails>
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
