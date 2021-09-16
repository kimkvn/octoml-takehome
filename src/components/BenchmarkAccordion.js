import React from "react";
import {
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  TextField,
} from "@material-ui/core/";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  accordionSummary: {
    display: "flex",
    flexDirection: "column",
  },
  benchmarkDropdown: {
    width: "100%",
  },
}));

const BenchmarkAccordion = ({
  hardwareData,
  updateBenchmarkOptions,
  confirmBenchmarkRequest,
}) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [benchmarkEngine, setBenchmarkEngine] = React.useState("");
  const [numberOfTrials, setNumberOfTrials] = React.useState(0);
  const [runsPerTrial, setRunsPerTrial] = React.useState(0);
  const [errorNumberOfTrials, setErrorNumberOfTrials] = React.useState(false);
  const [errorRunsPerTrial, setErrorRunsPerTrial] = React.useState(false);
  const [hardwareTarget, setHardwareTarget] = React.useState({});

  React.useEffect(() => {
    handleUpdateBenchmarkOptions();
  }, [benchmarkEngine, hardwareTarget, numberOfTrials, runsPerTrial]);

  const handleChangeCheck = (event) => {
    event.stopPropagation();
    setChecked(!checked);
    confirmBenchmarkRequest(!checked);
  };

  const handleUpdateBenchmarkOptions = () => {
    // TODO: "Form validation", don't allow user to submit/check option to request Benchmark
    // if options are missing
    const options = {
      engine: benchmarkEngine,
      hardware: hardwareTarget,
      num_trials: numberOfTrials,
      runs_per_trial: runsPerTrial,
    };
    updateBenchmarkOptions(options);
  };

  const handleSelectBenchmarkEngine = (event) =>
    setBenchmarkEngine(event.target.value);

  const handleChangeNumberOfTrials = (event) => {
    const count = event.target.value;
    if (!count.match(/^[0-9]*$/)) {
      setErrorNumberOfTrials(true);
    } else {
      setErrorNumberOfTrials(false);
      setNumberOfTrials(count);
    }
  };

  const handleChangeRunsPerTrial = (event) => {
    const count = event.target.value;
    if (!count.match(/^[0-9]*$/)) {
      setErrorRunsPerTrial(true);
    } else {
      setErrorRunsPerTrial(false);
      setRunsPerTrial(count);
    }
  };

  const handleSetHardwareTarget = (event) =>
    setHardwareTarget(event.target.value);

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
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
          <Grid container justifyContent="space-between" spacing={1}>
            <Grid item md={6}>
              <FormControl
                variant="outlined"
                className={classes.benchmarkDropdown}
              >
                <InputLabel htmlFor={"engine-dropdown"}>Engine</InputLabel>
                <Select
                  labelId="engine-dropdown"
                  id="engine-dropdown"
                  value={benchmarkEngine}
                  onChange={handleSelectBenchmarkEngine}
                  label="Engine"
                >
                  {" "}
                  <MenuItem value={"onyx"}>Onyx</MenuItem>
                  <MenuItem value={"tvm"}>TVM</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl
                variant="outlined"
                className={classes.benchmarkDropdown}
              >
                <InputLabel htmlFor={"hardware-dropdown"}>Hardware</InputLabel>
                <Select
                  labelId="hardware-dropdown"
                  id="hardware-dropdown"
                  value={hardwareTarget}
                  onChange={handleSetHardwareTarget}
                  label="Hardware"
                >
                  {hardwareData.map((target) => (
                    <MenuItem key={target.instance} value={target}>
                      {target.provider} - {target.instance} - {target.cpu} -{" "}
                      {target.memory}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container justifyContent="space-between" spacing={1}>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Number of Trials"
                variant="outlined"
                error={errorNumberOfTrials}
                helperText={
                  errorNumberOfTrials ? "Input must be a valid number" : ""
                }
                onChange={handleChangeNumberOfTrials}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Runs per Trials"
                variant="outlined"
                error={errorRunsPerTrial}
                helperText={
                  errorRunsPerTrial ? "Input must be a valid number" : ""
                }
                onChange={handleChangeRunsPerTrial}
              />
            </Grid>
          </Grid>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default BenchmarkAccordion;
