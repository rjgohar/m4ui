import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

import SignupSection from "../../components/signup";

function Signup() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box pt={5} pb={2}>
        <Typography className={classes.titleHead} variant="h4">
          Welcome!
        </Typography>
      </Box>
      <Box>
        <SignupSection />
      </Box>
    </Box>
  );
}

export default Signup;
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100vh",
    background: theme.palette.background.footer,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titleHead: {
    paddingRight: 20,
    fontSize: 36,
    fontweight: 500,
    color: theme.palette.primary.main,
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
      fontweight: 500,
    },
  },
}));
