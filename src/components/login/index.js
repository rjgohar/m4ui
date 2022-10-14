import { Box, makeStyles, Typography } from "@material-ui/core";
import TextField from "../input";
import React from "react";

import logo from "../../assests/logo.png";
import Buttons from "../../units/Button";
import { Link } from "react-router-dom";

export default function LoginSection() {
  const classes = useStyles();
  return (
    <Box mb={10} className={classes.mainContainer}>
      <Box pt={6}>
        <img className={classes.logo} src={logo} alt="logo" />
      </Box>
      <Box pt={8} pb={2}>
        <TextField variant="outlined" placeholder="UserName" />
      </Box>
      <Box pt={3} pb={3}>
        <TextField variant="outlined" placeholder="Password" />
      </Box>
      <Box mt={3}>
        <Link to="/">
          <Buttons className={classes.ButtonSignin} variant="contained">
            sign in
          </Buttons>
        </Link>
      </Box>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: 500,
    height: 500,

    borderRadius: "8px",
    backgroundColor: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  typo: {
    textAlign: "center",
    textTransform: "capitalize",
    color: theme.palette.primary.main,
  },
  ButtonSignin: {
    width: 180,
    textTransform: "capitalize",
    fontSize: 20,
    borderRadius: 25,
    fontWeight: 500,
  },

  logo: {
    width: 180,
    height: 50,
  },
}));
