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

const AccelerateAccordion = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState({
    benchmark: false,
    accelerate: false,
  });
  const [benchmarkEngine, setBenchmarkEngine] = React.useState("");
  const [benchmarkError, setBenchmarkError] = React.useState(false);

  const handleChangeCheck = (event) => {
    event.stopPropagation();
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  const handleSelectAccelerateEngine = (event) =>
    setBenchmarkEngine(event.target.value);

  const handleTextfieldChange = (event) => {
    if (!event.target.value.match(/^[0-9]*$/)) {
      setBenchmarkError(true);
    } else {
      setBenchmarkError(false);
    }
  };

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
        <form>
          <FormControl variant="outlined">
            <InputLabel htmlFor={"engine-dropdown"}>Engine</InputLabel>
            <Select
              labelId="engine-dropdown"
              id="engine-dropdown"
              value={benchmarkEngine}
              onChange={handleSelectAccelerateEngine}
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
            helperText={benchmarkError ? "Input must be a valid number" : ""}
            onChange={handleTextfieldChange}
          />
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccelerateAccordion;
