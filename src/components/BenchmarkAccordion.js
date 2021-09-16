import React from "react";
import {
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

const BenchmarkAccordion = ({ hardwareData }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState({
    benchmark: false,
    accelerate: false,
  });
  const [benchmarkEngine, setBenchmarkEngine] = React.useState("");
  const [errorNumberOfTrials, setErrorNumberOfTrials] = React.useState(false);
  const [errorRunsPerTrial, setErrorRunsPerTrial] = React.useState(false);
  const [hardwareTarget, setHardwareTarget] = React.useState({});

  const handleChangeCheck = (event) => {
    event.stopPropagation();
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  const handleSelectBenchmarkEngine = (event) =>
    setBenchmarkEngine(event.target.value);

  const handleChangeNumberOfTrials = (event) => {
    if (!event.target.value.match(/^[0-9]*$/)) {
      setErrorNumberOfTrials(true);
    } else {
      setErrorNumberOfTrials(false);
    }
  };

  const handleChangeRunsPerTrial = (event) => {
    if (!event.target.value.match(/^[0-9]*$/)) {
      setErrorRunsPerTrial(true);
    } else {
      setErrorRunsPerTrial(false);
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
          <FormControl variant="outlined">
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
          <TextField
            id="outlined-basic"
            label="Runs per Trials"
            variant="outlined"
            error={errorRunsPerTrial}
            helperText={errorRunsPerTrial ? "Input must be a valid number" : ""}
            onChange={handleChangeRunsPerTrial}
          />
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default BenchmarkAccordion;
