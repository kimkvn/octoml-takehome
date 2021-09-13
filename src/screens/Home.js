import { makeStyles, useTheme } from "@material-ui/core/";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    "flex-direction": "column",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <header>
        <h2>Shufflenet-v2.onnx</h2>
        <p>Created three days ago by Mike Johnson</p>
      </header>
      <Grid container justifyContent={"center"} spacing={2}>
        <Grid item md={9}>
          <Card>Octomize</Card>
        </Grid>
        <Grid item md={3}>
          <Card>Total Runs</Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
