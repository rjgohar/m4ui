import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

export default function VideoSection() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.text}>
        <Box>
          <Typography variant="h2" className="typo1">
            {" "}
            video tutorial
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" className="typo2">
            {" "}
            watch now our video tutorial
          </Typography>
        </Box>
      </Box>
      <Box className={classes.frameContainer}>
        <iframe
          className={classes.farme}
          src="https://www.youtube.com/embed/PfxLRA2bJ3A"
          title="euromicron corporate video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: 60,
  },
  frameContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: 20,
    textAlign: "start",
    flexDirection: "column",
    width: 460,
    height: 100,
    marginLeft: 215,
    textTransform: "capitalize",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 21,
      width: "70%",
    },

    "& .typo1": {
      fontSize: 28,
      fontWidth: 500,
    },
    "& .typo2": {
      fontSize: 22,
      fontWidth: 500,
    },
  },

  farme: {
    width: "1090px",
    height: "450px",

    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "400px",
    },
  },
}));
