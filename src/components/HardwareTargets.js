import React from "react";

import { makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import HardwareTargetItem from "./HardwareTargetItem";

const useStyles = makeStyles((theme) => ({
  targetsHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  listItem: {
    justifyContent: "space-between",
  },
}));

// let currentTargets = [
//   {
//     instance: null,
//     cpu: '',
//   }
// ]

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
      instance: "",
      cpu: null,
    },
  ]);

  React.useEffect(() => {
    checkCanAddTarget();
    updateUnavailableInstances();
  }, [currentTargets]);

  const handleUpdateCurrentTargets = (newTargets) => {
    setCurrentTargets(newTargets);
    updateCurrentTargets(newTargets);
  };

  const checkCanAddTarget = () => {
    let i = 0;
    while (i < currentTargets.length) {
      if (currentTargets[i].instance === null) {
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
        instance: "",
        cpu: "",
      },
    ];
    handleUpdateCurrentTargets(newTargets);
  };

  const handleSelectInstance = (id, newInstance, provider) => {
    const newTargets = currentTargets.map((target) => {
      if (target.id === id) {
        return {
          ...target,
          id: newInstance,
          instance: newInstance,
          cpu: hardwareTargets[provider].instances[newInstance].cpu,
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
      <List>
        {currentTargets.map((target, i) => (
          <HardwareTargetItem
            key={i}
            id={target.id}
            data={hardwareTargets}
            instance={target.instance}
            unavailableInstances={unavailableInstances}
            cpu={target.cpu}
            handleSelectInstance={handleSelectInstance}
            currentTargets={currentTargets}
            deleteItem={handleDeleteTarget}
            disableDelete={i === 0}
          />
        ))}
      </List>
    </>
  );
};

export default HardwareTargets;
