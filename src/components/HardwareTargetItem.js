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
  deleteItem,
  disableDelete,
}) => {
  const classes = useStyles();
  const [provider, setProvider] = React.useState("");

  const providerDropdown = React.createRef();
  const instanceDropdown = React.createRef();

  const handleSetProvider = (event) => {
    setProvider(event.target.value);
  };

  const handleSetInstance = (event) =>
    handleSelectInstance(id, event.target.value, provider);

  const instanceIsDisabled = (instance) => {
    return unavailableInstances.includes(instance);
  };

  const handleDeleteItem = () => {
    deleteItem(id);
  };
  return (
    <ListItem className={classes.listItem}>
      <FormControl variant="outlined" ref={providerDropdown}>
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
      <FormControl variant="outlined" ref={instanceDropdown}>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={instance}
          onChange={handleSetInstance}
          disabled={!provider}
        >
          {provider ? (
            Object.keys(data[provider].instances).map((instance) => {
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
          ) : (
            <MenuItem></MenuItem>
          )}
        </Select>
      </FormControl>
      <div className="cpuValue">
        {data[provider]?.instances[instance]?.cpu ?? 0}
      </div>
      <div className="memoryValue">
        {data[provider]?.instances[instance]?.memory ?? 0}
      </div>
      {disableDelete ? (
        <></>
      ) : (
        <Button>
          <CloseIcon onClick={handleDeleteItem} />
        </Button>
      )}
    </ListItem>
  );
};

export default HardwareTargetItem;
