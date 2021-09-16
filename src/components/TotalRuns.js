import React from "react";
import { List, ListItem, makeStyles } from "@material-ui/core/";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  totalRunsHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
  },
  totalRunsItem: {
    display: "flex",
    justifyContent: "space-between",
  },
  totalRunsTargetInfo: {},
  totalRunsGreen: {
    color: "#4DB396",
  },
}));

const TotalRuns = ({
  currentTargets,
  runBenchmark,
  runAcceleration,
  clickOctomize,
}) => {
  const classes = useStyles();

  return (
    <Card>
      <header className={classes.totalRunsHeader}>
        Total Runs:{" "}
        <h3 className={classes.totalRunsGreen}>{currentTargets.length}</h3>
      </header>
      <section>
        {runBenchmark ? (
          <h4 className={classes.totalRunsGreen}>* Run Benchmark *</h4>
        ) : (
          ""
        )}
        {runAcceleration ? (
          <h4 className={classes.totalRunsGreen}>* Run Acceleration *</h4>
        ) : (
          ""
        )}
      </section>
      <List>
        {currentTargets.map((target) => {
          if (target.instance !== null) {
            return (
              <ListItem key={target.id} className={classes.totalRunsItem}>
                <div className={classes.totalRunsTargetInfo}>
                  <b>{target.instance}</b>
                  <p>{target.cpu} cores</p>
                </div>
                <p className={classes.totalRunsGreen}>1</p>
              </ListItem>
            );
          } else {
            return null;
          }
        })}
      </List>
      <Button
        variant="contained"
        color="primary"
        onClick={() => clickOctomize()}
        disabled={currentTargets.length === 0}
      >
        Octomize
      </Button>
    </Card>
  );
};

export default TotalRuns;
