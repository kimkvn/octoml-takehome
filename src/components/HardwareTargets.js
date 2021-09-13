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

/*
  [
  {
    provider: 'AWS',
    instances: [
      {
        instance: m4.large,
        cpu: 2,
        memory: 8
      },
      {
        instance: m4.xlarge,
        cpu: 4,
        memory: 16,
      },
      {
        instance: m4.2xlarge,
        cpu: 8,
        memory: 32
      },
      {
        instance: m4.4xlarge,
        cpu: 16,
        memory: 64
      }
    ]
  },
  {
    provider: 'GCP',
    instances: [
      {
        instance: n2-standard-2,
        cpu: 2,
        memory: 8
      },
      {
        instance: n2-standard-4
        cpu: 4,
        memory: 16,
      },
      {
        instance: n2-standard-8
        cpu: 8,
        memory: 32
      },
      {
        instance: n2-standard-16,
        cpu: 16,
        memory: 64
      }
    ]
  },
  }
]
*/

const HardwareTargets = () => {
  const classes = useStyles();
  const [hardwareTargets, setHardwareTargets] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);
  const [provider, setProvider] = React.useState("");
  const [instance, setInstance] = React.useState("");

  async function fetchHardwareTargets() {
    const url = "http://netheria.takehome.octoml.ai/hardware";
    try {
      let res = await fetch(url, {
        method: "GET",
        // mode: "no-cors",
      });
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }

  async function assembleHardwareTargetsData() {
    let data = await fetchHardwareTargets();

    let final = {};

    const addProviderInstance = (target) => {
      final[target.provider].instances[target.instance] = {
        name: target.instance,
        cpu: target.cpu,
        memory: target.memory,
      };
    };

    data.forEach((target) => {
      if (final[target.provider]) {
        addProviderInstance(target);
      } else {
        final[target.provider] = {
          instances: {},
        };
        addProviderInstance(target);
      }
    });
    setHardwareTargets(final);
    setLoading(false);
  }

  React.useEffect(() => {
    assembleHardwareTargetsData();
  }, []);

  const handleSetProvider = (event) => setProvider(event.target.value);

  const handleSetInstance = (event) => setInstance(event.target.value);

  if (isLoading) {
    return <h1>LOADING</h1>;
  }

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
              {Object.keys(hardwareTargets).map((provider) => (
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
