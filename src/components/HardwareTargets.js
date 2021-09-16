import React from "react";
import HardwareTargetItem from "./HardwareTargetItem";

import { Divider, Grid, makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  targetsHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  listHeaders: {
    padding: "0 14px",
  },
  targetsHeaderText: {
    fontSize: "12px",
  },
  listItem: {
    justifyContent: "space-between",
  },
}));

const HardwareTargets = ({
  hardwareTargets,
  allInstances,
  updateCurrentTargets,
}) => {
  const classes = useStyles();
  const [canAddTarget, setCanAddTarget] = React.useState(false);
  const [unavailableInstances, setUnavailableInstances] = React.useState([]);
  const [currentTargets, setCurrentTargets] = React.useState([
    {
      id: 0,
      provider: "",
      instance: "",
      cpu: 0,
    },
  ]);

  React.useEffect(() => {
    checkCanAddTarget();
    updateUnavailableInstances();
  }, [currentTargets]);

  const handleUpdateCurrentTargets = (newTargets) => {
    setCurrentTargets(newTargets);
    const validTargets = newTargets.filter((target) => target.instance !== "");
    updateCurrentTargets(validTargets);
  };

  const checkCanAddTarget = () => {
    let i = 0;
    while (i < currentTargets.length) {
      if (currentTargets[i].instance === "") {
        setCanAddTarget(false);
        return;
      }
      i++;
    }
    setCanAddTarget(true);

    if (currentTargets.length === allInstances.length) setCanAddTarget(false);
  };

  const updateUnavailableInstances = () => {
    const newInstances = currentTargets.map((target) => target.instance);
    setUnavailableInstances(newInstances);
  };

  const handleAddTarget = () => {
    const newTargets = [
      ...currentTargets,
      {
        id: 0,
        provider: "",
        instance: "",
        cpu: 0,
      },
    ];
    handleUpdateCurrentTargets(newTargets);
  };

  const handleUpdateTarget = (targetData) => {
    const { id, provider, instance, cpu, memory } = targetData;
    const newTargets = currentTargets.map((target) => {
      if (target.id === id) {
        return {
          id: instance,
          provider,
          instance,
          cpu,
          memory,
        };
      }
      return target;
    });

    handleUpdateCurrentTargets(newTargets);
  };

  const handleDeleteTarget = (id) => {
    const newTargets = currentTargets.filter((target) => {
      return target.id !== id;
    });
    handleUpdateCurrentTargets(newTargets);
  };

  return (
    <>
      <div className={classes.targetsHeader}>
        <h4>Hardware targets</h4>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTarget}
          disabled={!canAddTarget}
        >
          Add
        </Button>
      </div>
      <section className={classes.listHeaders}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item md={2}>
            <p className={classes.targetsHeaderText}>PROVIDER</p>
          </Grid>
          <Grid item md={4}>
            <p className={classes.targetsHeaderText}>INSTANCE</p>
          </Grid>
          <Grid item md={1}>
            <p className={classes.targetsHeaderText}>VCPU</p>
          </Grid>
          <Grid item md={1}>
            <p className={classes.targetsHeaderText}>MEMORY (GB)</p>
          </Grid>
          <Grid item md={1}></Grid>
        </Grid>
      </section>
      <Divider />
      <List>
        {currentTargets.map((target, i) => (
          <HardwareTargetItem
            key={i}
            targetData={target}
            allTargets={hardwareTargets}
            unavailableInstances={unavailableInstances}
            handleUpdateTarget={handleUpdateTarget}
            deleteItem={handleDeleteTarget}
            disableDelete={i === 0}
          />
        ))}
      </List>
    </>
  );
};

export default HardwareTargets;
