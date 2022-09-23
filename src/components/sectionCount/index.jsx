import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

export default function SectionCount() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box>
        <Typography className={classes.typoHead}> 4749</Typography>
        <Typography className={classes.typoText}>downloads</Typography>
      </Box>
      <Box>
        <Typography className={classes.typoHead}> 4749</Typography>
        <Typography className={classes.typoText}>likes</Typography>
      </Box>
      <Box>
        <Typography className={classes.typoHead}> 4749</Typography>
        <Typography className={classes.typoText}>5 star ratting</Typography>
      </Box>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: 200,
    color: theme.palette.primary.main,
    background: theme.palette.background.main,
    display: "flex",

    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
      flexWrap: "wrap",

      flexDirection: "column",
    },
  },

  typoHead: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: 700,
    [theme.breakpoints.down("xs")]: {
      marginTop: 30,
      lineHeight: "35px",
    },
  },
  typoText: {
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 28,
    fontWeight: 700,
  },
}));
