import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Button from "../../units/Button";
import logo from "../../assests/logo.png";

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.maincontainer}>
      <Box className={classes.main}>
        <Box>
          <div className={classes.innerHead}>
            <img src={logo} alt="logo" className="logo" />

            <Button className="button" variant="contained">
              {" "}
              Email us
            </Button>
          </div>
        </Box>
        <Box>
          <Typography className={classes.heading} variant="h3">
            Product
          </Typography>
          <div className={classes.innerHead}>
            <Typography className="text" variant="subtitle1">
              freatures
            </Typography>
            <Typography className="text" variant="subtitle1">
              videos
            </Typography>
            <Typography className="text" variant="subtitle1">
              demo ads
            </Typography>
          </div>
        </Box>
        <Box>
          <Typography className={classes.heading} variant="h3">
            price
          </Typography>
          <div className={classes.innerHead}>
            <Typography className="text" variant="subtitle1">
              text
            </Typography>
            <Typography className="text" variant="subtitle1">
              text
            </Typography>
            <Typography className="text" variant="subtitle1">
              text
            </Typography>
          </div>
        </Box>
        <Box>
          <Typography className={classes.heading} variant="h3">
            Community
          </Typography>
          <div className={classes.innerHead}>
            <Typography className="text" variant="subtitle1">
              text
            </Typography>
            <Typography className="text" variant="subtitle1">
              text
            </Typography>
            <Typography className="text" variant="subtitle1">
              text
            </Typography>
          </div>
        </Box>
        <Box>
          <Typography className={classes.heading} variant="h3">
            road map
          </Typography>
          <div className={classes.innerHead}>
            <Typography className="text" variant="subtitle1">
              text
            </Typography>
            <Typography className="text" variant="subtitle1">
              text
            </Typography>
            <Typography className="text" variant="subtitle1">
              text
            </Typography>
          </div>
        </Box>
        <Box>
          <Typography className={classes.heading} variant="h3">
            documentation
          </Typography>
          <div className={classes.innerHead}>
            <Typography className="text" variant="subtitle1">
              let's start
            </Typography>
          </div>
        </Box>
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    background: theme.palette.background.footer,
  },
  main: {
    paddingTop: 30,
    paddingBottom: 30,
    display: "grid",

    gridTemplateColumns: "2fr  1fr 1fr 1fr 1fr 1fr",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr 1fr",
      justifyItems: "center",
      rowGap: 40,
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "  1fr",
      justifyItems: "start",
      marginLeft: 20,
      gap: 20,
    },
  },

  innerHead: {
    paddingTop: 30,
    display: "flex",
    flexDirection: "column",
    gap: 5,

    "& .logo": {
      paddingLeft: 20,
      width: 300,
      height: 100,
    },

    "& .text": {
      fontSize: 17,
      fontWeight: 700,
      cursor: "pointer",
      color: theme.palette.text.primary,
      textTransform: "capitalize",
    },
    " & .button": {
      textAlign: "center",
      width: 100,
      marginLeft: 100,
    },
  },

  heading: {
    fontSize: 22,
    fontWeight: 700,
    paddingTop: 40,
    color: theme.palette.primary.main,
    textTransform: "capitalize",
    cursor: "pointer",
  },
}));
