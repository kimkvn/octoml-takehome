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

const HardwareTargetItem = ({ data }) => {
  const classes = useStyles();

  const [provider, setProvider] = React.useState(null);
  const [instance, setInstance] = React.useState(null);

  const handleSetProvider = (event) => setProvider(event.target.value);

  const handleSetInstance = (event) => setInstance(event.target.value);

  return (
    <ListItem className={classes.listItem}>
      <FormControl variant="outlined">
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={provider}
          onChange={handleSetProvider}
        >
          {Object.keys(data).map((provider) => (
            <MenuItem key={provider} value={provider}>
              {provider}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined">
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={instance}
          onChange={handleSetInstance}
          disabled={!provider}
        >
          {provider
            ? Object.keys(data[provider].instances).map((instance) => (
                <MenuItem key={instance} value={instance}>
                  {instance}
                </MenuItem>
              ))
            : null}
        </Select>
      </FormControl>
      <div className="vcpuValue">
        {provider && instance ? data[provider].instances[instance].cpu : 0}
      </div>
      <div className="memoryValue">
        {provider && instance ? data[provider].instances[instance].memory : 0}
      </div>
      <Button>
        <CloseIcon />
      </Button>
    </ListItem>
  );
};

export default HardwareTargetItem;
