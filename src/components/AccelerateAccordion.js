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

const AccelerateAccordion = ({ updateAccelerateOptions, formData }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState({
    benchmark: false,
    accelerate: false,
  });
  const [engine, setEngine] = React.useState("");
  const [showKernelTrials, setShowKernelTrials] = React.useState(false);
  const [benchmarkError, setBenchmarkError] = React.useState(false);

  React.useEffect(() => {
    const newData = {
      ...formData,
      engine,
    };
    updateAccelerateOptions(newData);
  }, [engine]);

  const handleChangeCheck = (event) => {
    event.stopPropagation();
    setChecked({ ...checked, [event.target.name]: event.target.checked });
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

  //   {
  //     "engine": { "TVM": { "kernel_trials": 2000 } },
  //     "hardware": {
  //       "provider": "AWS",
  //       "instance": "m4.large",
  //       "cpu": 2,
  //       "memory": 8
  //     }
  //   }

  return (
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
        <FormControl variant="outlined">
          <InputLabel htmlFor={"engine-dropdown"}>Engine</InputLabel>
          <Select
            labelId="engine-dropdown"
            id="engine-dropdown"
            value={engine}
            onChange={handleSetEngine}
          >
            {" "}
            <MenuItem value={"ONYX"}>Onyx</MenuItem>
            <MenuItem value={"TVM"}>TVM</MenuItem>
          </Select>
          {showKernelTrials ? (
            <TextField
              id="outlined-basic"
              label="Kernel Trials"
              variant="outlined"
              error={benchmarkError}
              helperText={benchmarkError ? "Input must be a valid number" : ""}
              onChange={handleTextfieldChange}
            />
          ) : (
            ""
          )}
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccelerateAccordion;
