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
  targetData,
  allTargets,
  unavailableInstances,
  handleUpdateTarget,
  deleteItem,
  disableDelete,
}) => {
  const { id, provider, instance, cpu } = targetData;
  const classes = useStyles();

  const providerDropdown = React.createRef();
  const instanceDropdown = React.createRef();

  const handleSetProvider = (event) =>
    handleUpdateTarget({
      id,
      provider: event.target.value,
      instance,
      cpu,
    });

  const handleSetInstance = (event) => {
    const instance = event.target.value;
    handleUpdateTarget({
      id,
      provider,
      instance,
      cpu: allTargets[provider].instances[instance].cpu,
      memory: allTargets[provider].instances[instance].memory,
    });
  };

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
          labelId="provider-dropdown"
          id="provider-dropdown"
          value={provider}
          onChange={handleSetProvider}
        >
          <MenuItem value="" disabled>
            Select Provider
          </MenuItem>
          {Object.keys(allTargets).map((provider) => (
            <MenuItem key={provider} value={provider}>
              {provider}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined" ref={instanceDropdown}>
        <Select
          labelId="instance-dropdown"
          id="instance-dropdown"
          value={instance}
          onChange={handleSetInstance}
          disabled={!provider}
        >
          {" "}
          <MenuItem value="" disabled>
            Select Instance
          </MenuItem>
          {provider ? (
            Object.keys(allTargets[provider].instances).map((instance) => {
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
        {allTargets[provider]?.instances[instance]?.cpu ?? "-"}
      </div>
      <div className="memoryValue">
        {allTargets[provider]?.instances[instance]?.memory ?? "-"}
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
