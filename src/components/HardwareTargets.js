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

const HardwareTargets = ({ hardwareTargets }) => {
  const classes = useStyles();
  const [canAddTarget, setCanAddTarget] = React.useState(false);
  const [currentTargets, updateCurrentTargets] = React.useState([
    {
      id: 0,
      instance: null,
      cpu: null,
    },
  ]);

  React.useEffect(() => {
    checkCanAddTarget();
  }, [currentTargets]);

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
  };

  const handleAddTarget = () => {
    const newTargets = [
      ...currentTargets,
      {
        id: 0,
        instance: null,
        cpu: null,
      },
    ];
    updateCurrentTargets(newTargets);
  };

  const handleSelectInstance = (id, newInstance) => {
    const newTargets = currentTargets.map((target) => {
      if (target.id === id) {
        return {
          ...target,
          id: newInstance,
          instance: newInstance,
        };
      }
      return target;
    });

    updateCurrentTargets(newTargets);
  };

  const handleDeleteTarget = (id) => {
    const newTargets = currentTargets.filter((target) => {
      return target.id !== id;
    });
    updateCurrentTargets(newTargets);
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
