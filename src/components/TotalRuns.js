import React from "react";
import { Grid, List, ListItem, makeStyles } from "@material-ui/core/";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  totalRunsCard: {
    padding: "14px",
  },
  totalRunsHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
  },
  totalRunsSubHeaderText: {
    fontSize: "12px",
    fontWeight: "bold",
    margin: 0,
  },
  totalRunsValue: {
    margin: "4px 0 ",
  },

  totalRunsItem: {
    padding: "4px 0",
    alignItems: "baseline",
  },
  targetInfoCore: {
    margin: "2px 0",
    fontSize: "12px",
  },
  targetRunValue: {
    fontWeight: "bold",
    margin: 0,
  },
  totalRunsTargetInfo: {},
  totalRunsGreen: {
    color: "#4DB396",
  },
  totalRunsButton: {
    width: "100%",
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
    <Card className={classes.totalRunsCard}>
      <header className={classes.totalRunsHeader}>
        <p className={classes.totalRunsSubHeaderText}>Total Runs: </p>
        <h2 className={clsx(classes.totalRunsGreen, classes.totalRunsValue)}>
          {currentTargets.length}
        </h2>
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
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <div className={classes.totalRunsTargetInfo}>
                      <b>{target.instance}</b>
                      <p className={classes.targetInfoCore}>
                        {target.cpu} cores
                      </p>
                    </div>
                  </Grid>
                  <Grid itemn>
                    <p
                      className={clsx(
                        classes.totalRunsGreen,
                        classes.targetRunValue
                      )}
                    >
                      1
                    </p>
                  </Grid>
                </Grid>
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
        className={classes.totalRunsButton}
      >
        Octomize
      </Button>
    </Card>
  );
};

export default TotalRuns;
