import React from "react";

import { makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  targetsHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  listItem: {
    justifyContent: "space-between",
  },
}));
const HardwareTargets = () => {
  const classes = useStyles();
  const [provider, setProvider] = React.useState("");
  const [instance, setInstance] = React.useState("");

  const handleSetProvider = (event) => setProvider(event.target.value);

  const handleSetInstance = (event) => setInstance(event.target.value);

  return (
    <>
      <div className={classes.targetsHeader}>
        <h4>Hardware targets</h4>
        <Button variant="contained" color="primary">
          Add
        </Button>
      </div>
      <List>
        <ListItem className={classes.listItem}>
          <FormControl variant="outlined">
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={provider}
              onChange={handleSetProvider}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined">
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={instance}
              onChange={handleSetInstance}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"large"}>large</MenuItem>
              <MenuItem value={"xlarge"}>xlarge</MenuItem>
              <MenuItem value={"xxlarge"}>xxlarge</MenuItem>
            </Select>
          </FormControl>
          <div className="vcpuValue">2</div>
          <div className="memoryValue">3.75</div>
          <Button>
            <CloseIcon />
          </Button>
        </ListItem>
      </List>
    </>
  );
};

export default HardwareTargets;
