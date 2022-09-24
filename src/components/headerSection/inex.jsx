import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import pic from "../../assests/background.png";
import Button from "../../units/Button";
export default function HeadSection() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.headingsection}>
        <Box className={classes.heading}>
          <Typography className="typo1">EXPERIANCE</Typography>

          <Box className={classes.innerSection}>
            {" "}
            <Typography className="typo2"> THE NEW </Typography>
            <Typography className="typo3"> API4UI </Typography>
          </Box>
        </Box>
      </Box>

      <Box className={classes.secondSection}>
        <Typography className="typoInner">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </Typography>
      </Box>

      <Box className={classes.buttonSection}>
        <Button className="btn1" variant="contained">
          {" "}
          get Started
        </Button>
        <Button className="btn2" variant="outlined">
          {" "}
          get Started
        </Button>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    height: "600px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${pic})`,
  },
  headingsection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  heading: {
    paddingTop: 130,
    "& .typo1": {
      color: theme.palette.primary.main,
      fontWeight: 700,
      fontSize: 85,
      lineHeight: "60px",
      paddingLeft: 90,
      [theme.breakpoints.down("sm")]: {
        fontSize: 65,
      },
      [theme.breakpoints.down("xs")]: {
        paddingLeft: 35,
        fontSize: 45,
      },
    },
  },
  innerSection: {
    display: "flex",
    gap: 30,

    [theme.breakpoints.down("sm")]: {
      gap: 20,
    },
    [theme.breakpoints.down("xs")]: {
      gap: 10,
    },

    "& .typo2": {
      color: theme.palette.primary.main,
      fontWeight: 700,
      fontSize: 90,

      [theme.breakpoints.down("sm")]: {
        fontSize: 70,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 45,
      },
    },
    "& .typo3": {
      color: theme.palette.secondary.main,
      fontWeight: 700,
      fontSize: 90,
      [theme.breakpoints.down("sm")]: {
        fontSize: 70,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 45,
      },
    },
  },

  secondSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
    color: theme.palette.primary.main,
    fontWeight: 500,
    fontSize: 24,
    "& .typoInner": {
      width: 718,
      margin: " 0px 0px 0px 16px ",
      textAlign: "center",
    },
  },

  buttonSection: {
    paddingTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      columnGap: 10,
    },

    "& .btn1": {
      width: 180,
      fontSize: 16,
      fontWeight: 800,
      [theme.breakpoints.down("xs")]: {
        marginBottom: 10,
      },
    },

    "& .btn2": {
      width: 180,
      border: "2px solid" + theme.palette.secondary.main,
      fontSize: 16,
      fontWeight: 800,
    },
  },
}));
