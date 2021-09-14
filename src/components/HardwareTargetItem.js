import React from "react";

import { makeStyles } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
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

const HardwareTargetItem = ({
  id,
  data,
  instance,
  unavailableInstances,
  handleSelectInstance,
  currentTargets,
  deleteItem,
  disableDelete,
}) => {
  const classes = useStyles();
  const [provider, setProvider] = React.useState(null);

  const handleSetProvider = (event) => {
    setProvider(event.target.value);
    handleSelectInstance(id, null);
  };

  const handleSetInstance = (event) =>
    handleSelectInstance(id, event.target.value);

  const instanceIsDisabled = (instance) => {
    return unavailableInstances.includes(instance);
  };

  const handleDeleteItem = () => deleteItem(id);

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
            ? Object.keys(data[provider].instances).map((instance) => {
                return (
                  <MenuItem
                    key={instance}
                    value={instance}
                    disabled={instanceIsDisabled(instance)}
                  >
                    {instance}
                  </MenuItem>
                );
              })
            : null}
        </Select>
      </FormControl>
      <div className="cpuValue">
        {provider && instance ? data[provider].instances[instance].cpu : 0}
      </div>
      <div className="memoryValue">
        {provider && instance ? data[provider].instances[instance].memory : 0}
      </div>
      {disableDelete ? null : (
        <Button>
          <CloseIcon onClick={handleDeleteItem} />
        </Button>
      )}
    </ListItem>
  );
};

export default HardwareTargetItem;
