import React from "react";

import { makeStyles, Grid } from "@material-ui/core";
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
  listItemDropdown: {
    width: "100%",
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
      instance: "",
      cpu: 0,
      memory: 0,
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
    <ListItem>
      <Grid
        container
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item md={2}>
          <FormControl
            variant="outlined"
            ref={providerDropdown}
            className={classes.listItemDropdown}
          >
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
        </Grid>
        <Grid item md={4}>
          <FormControl
            variant="outlined"
            ref={instanceDropdown}
            className={classes.listItemDropdown}
          >
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
        </Grid>
        <Grid item md={1}>
          <div className="cpuValue">
            {allTargets[provider]?.instances[instance]?.cpu ?? "-"}
          </div>
        </Grid>
        <Grid item md={1}>
          <div className="memoryValue">
            {allTargets[provider]?.instances[instance]?.memory ?? "-"}
          </div>
        </Grid>
        <Grid item md={1}>
          {disableDelete ? (
            <></>
          ) : (
            <Button>
              <CloseIcon onClick={handleDeleteItem} />
            </Button>
          )}
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default HardwareTargetItem;
