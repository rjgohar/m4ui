import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Button from "../../units/Button";
import CardMapped from "../priceCard/cardsMapped";

const PriceSection = () => {
  const classes = useStyles();
  return (
    <Box pt={6}>
      <Box className={classes.textContainer}>
        <Typography className={classes.text} variant="h1">
          choose pricing plan which suits your need
        </Typography>
      </Box>
      <Box pt={10}>
        <CardMapped />
      </Box>
      <Box pt={5} pb={5} className={classes.textContainer}>
        <Button variant="contained"> compair the plans</Button>
      </Box>
    </Box>
  );
};

export default PriceSection;

const useStyles = makeStyles((theme) => ({
  textContainer: {
    display: "flex",

    textAlign: "center",
    justifyContent: "center",
  },
  text: { width: "30%", color: theme.palette.text.primary },
}));