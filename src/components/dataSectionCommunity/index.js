import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function DataSecCommunity({
  ava,
  textUpper,
  text1,
  text2,
  hitext,
  bodytext,
  regardtext,
  textEnd,
}) {
  const classes = useStyles();

  return (
    <Box className={classes.inner}>
      <Box className={classes.avatorContainer}>
        <Box>
          <div className={classes.imageSection}>
            <img className="image" src={ava} alt="img" />
          </div>
        </Box>

        <Box>
          <Typography variant="h1" className={classes.textUpper}>
            {textUpper}
          </Typography>
          <div className={classes.innertext}>
            {" "}
            <Typography variant="h2">{text1}</Typography>
            <Typography variant="h2">{text2}</Typography>
          </div>
        </Box>
      </Box>
      <Box className={classes.dataContainer}>
        <div>
          <Typography variant="body1">{hitext}</Typography>
        </div>
        <div className={classes.bodytext}>
          <Typography variant="body1">{bodytext}</Typography>
        </div>
        <div>
          <Typography variant="body1"> {regardtext}</Typography>
        </div>
        <Box className={classes.endSection}>
          <StarBorderIcon className="icon" />
          <Typography variant="body1"> {textEnd}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default DataSecCommunity;

const useStyles = makeStyles((theme) => ({
  inner: {
    display: "flex",
    margin: "0px 30px",
    backgroundColor: theme.palette.primary.main,
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      justifyContent: "center",
      alignItems: "center",
      margin: "0px 0px",
    },
  },

  imageSection: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: theme.palette.background.community,

    "& .image": {
      width: 90,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 90,
      margin: "auto",
      borderRadius: 50,
    },
  },

  avatorContainer: {
    paddingTop: 40,
    paddingLeft: 20,
    display: "flex",
    gap: 20,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      paddingLeft: 0,
    },
  },

  textUpper: {
    color: theme.palette.secondary.main,
    fontSize: 40,
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      textAlign: "center",
    },
  },
  innertext: {
    fontSize: 18,
    fontWeight: 700,
    display: "flex",
    gap: 30,
    textTransform: "uppercase",
    color: theme.palette.text.primary,
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: " column",
      textAlign: "center",
      gap: 10,
      paddingTop: 40,
    },
  },
  dataContainer: {
    color: theme.palette.text.primary,
    display: "flex",
    flexDirection: "column",
    gap: 30,
    padding: "50px 50px",
  },

  endSection: {
    display: "flex",
    gap: 5,
    "& .icon": {
      fontSize: 25,
      color: theme.palette.secondary.main,
    },
  },

  bodytext: {
    textAlign: "start",
  },
}));
