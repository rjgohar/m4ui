import { makeStyles } from "@material-ui/core";
import React from "react";

const Wrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};

export default Wrapper;

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0em 6em",
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
  },
}));
