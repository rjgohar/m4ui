import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import pic1 from "../../assests/google.png";
import pic2 from "../../assests/app.png";
import RegisterMini from "../registerminicampo";

export default function RegisterSection() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.headingSection}></Box>

      <Box>
        <Typography variant="h1" className={classes.typoHead}>
          Download
        </Typography>
      </Box>
      <Box className={classes.innerText}>
        <Typography variant="h1" className="textinner">
          API4UI{" "}
        </Typography>
        <Typography variant="h1" className="text2">
          Today
        </Typography>
      </Box>

      <Box className={classes.textEnd}>
        {" "}
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod{" "}
        </Typography>
      </Box>

      <Box className={classes.endbtnSection}>
        <Box>
          <img className={classes.image} src={pic1} alt="img" />
        </Box>
        <Box>
          <img className={classes.image} src={pic2} alt="img" />
        </Box>
      </Box>

      <Box className={classes.endSection}>
        <RegisterMini />
      </Box>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "80%",
    margin: "auto",
    textAlign: "center",
    backgroundColor: theme.palette.text.primary,
    [theme.breakpoints.down("xs")]: {
      width: "85%",
    },
  },

  headingSection: {
    paddingTop: 90,
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  typoHead: {
    color: theme.palette.primary.main,
    fontSize: 50,
    textTransform: "capitalize",
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
  innerText: {
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    gap: 10,
    "& .text2": {
      color: theme.palette.primary.main,
      fontSize: 50,
      [theme.breakpoints.down("xs")]: {
        fontSize: 30,
      },
    },

    "& .textinner": {
      color: theme.palette.secondary.main,

      fontSize: 50,
      [theme.breakpoints.down("xs")]: {
        fontSize: 30,
      },
    },
  },

  textEnd: {
    paddingTop: 20,
    margin: "auto",
    width: 430,
    textAlign: "center",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      width: 300,
    },
  },
  endbtnSection: {
    paddingTop: 30,
    paddingBottom: 30,
    display: "flex",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      paddingTop: 40,
      flexDirection: "column",
      gap: 30,
    },
  },
  image: {
    width: 180,
    height: 50,

    "&:hover": {
      cursor: "pointer",
    },
  },

  endSection: {},
}));
