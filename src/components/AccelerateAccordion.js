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
  accelerateDropdown: {
    width: "100%",
  },
}));

const AccelerateAccordion = ({
  hardwareData,
  updateAccelerateOptions,
  formData,
  confirmAccelerateRequest,
}) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [engine, setEngine] = React.useState("");
  const [hardwareTarget, setHardwareTarget] = React.useState({});
  const [showKernelTrials, setShowKernelTrials] = React.useState(false);
  const [benchmarkError, setBenchmarkError] = React.useState(false);

  React.useEffect(() => {
    const newData = {
      ...formData,
      engine,
      hardware: hardwareTarget,
    };
    updateAccelerateOptions(newData);
  }, [engine]);

  const handleChangeCheck = (event) => {
    event.stopPropagation();
    setChecked(!checked);
    confirmAccelerateRequest(!checked);
  };

  const handleSetEngine = (event) => {
    /* Ideally, I would send the new "engine" up to the parent, which would then 
        send the new state back down to this accordion, but because the type of "engine" 
        can change from a string to an object (depending on ONYX vs TVM), I'm managing 
        engine here in component state, and using useEffect to inform the parent the 
        engine has changed
      */
    const newEngine = event.target.value.toUpperCase();
    if (newEngine === "TVM") {
      setShowKernelTrials(true);
    } else {
      setShowKernelTrials(false);
    }
    setEngine(newEngine);
  };

  const handleSetKernelTrials = (event) => {
    const trialCount = event.target.value;
    const newData = {
      ...formData,
      engine: {
        TVM: {
          kernel_trials: trialCount,
        },
      },
    };
    updateAccelerateOptions(newData);
  };

  const handleTextfieldChange = (event) => {
    if (!event.target.value.match(/^[0-9]*$/)) {
      setBenchmarkError(true);
    } else {
      setBenchmarkError(false);
      handleSetKernelTrials(event);
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
        <Grid container spacing={1}>
          <Grid item md={4}>
            <FormControl
              variant="outlined"
              className={classes.accelerateDropdown}
            >
              <InputLabel htmlFor={"engine-dropdown"}>Engine</InputLabel>
              <Select
                labelId="engine-dropdown"
                id="engine-dropdown"
                value={engine}
                onChange={handleSetEngine}
                label="Engine"
              >
                {" "}
                <MenuItem value={"ONYX"}>Onyx</MenuItem>
                <MenuItem value={"TVM"}>TVM</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {showKernelTrials ? (
            <Grid item md={4}>
              <TextField
                id="outlined-basic"
                label="Kernel Trials"
                variant="outlined"
                error={benchmarkError}
                helperText={
                  benchmarkError ? "Input must be a valid number" : ""
                }
                onChange={handleTextfieldChange}
              />
            </Grid>
          ) : (
            ""
          )}
          <Grid item md={4}>
            <FormControl
              variant="outlined"
              className={classes.accelerateDropdown}
            >
              <InputLabel id={"hardware-dropdown"}>Hardware</InputLabel>
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
      </AccordionDetails>
    </Accordion>
  );
};

export default AccelerateAccordion;
