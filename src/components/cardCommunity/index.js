import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

function CardCommunity({ image, text1, text2 }) {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Box className={classes.imageSection}>
        <img className="image" src={image} alt="img" />
      </Box>

      <Box>
        <Typography className={classes.text1} variant="h2">
          {text1}
        </Typography>
      </Box>
      <Box className={classes.endSection}>
        <Typography className={classes.text2} variant="h2">
          {text2}
        </Typography>
      </Box>
    </Box>
  );
}

export default CardCommunity;

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.primary.main,
    width: 230,
  },

  imageSection: {
    margin: "30px 0px",
    width: 150,
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 99,
    backgroundColor: theme.palette.background.community,

    "& .image": {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
  },

  text1: {
    fontSize: 16,
    fontWeight: 700,
    textTransform: "capitalize",
    color: theme.palette.text.primary,
  },
  text2: {
    fontSize: 16,
    fontWeight: 700,
    textTransform: "capitalize",
    color: theme.palette.secondary.main,
  },

  endSection: {
    paddingBottom: 30,
  },
}));
