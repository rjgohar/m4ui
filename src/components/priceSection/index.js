import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import Button from "../../units/Button";
import Wrapper from "../../units/wrapper";
import CardMapped from "../priceCard/cardsMapped";
import BasicTable from "../table/data";

const PriceSection = () => {
  const classes = useStyles();
  const [clk, setClk] = useState(false);
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
        <Button
          variant="contained"
          onClick={() => {
            setClk(!clk);
          }}
        >
          {" "}
          compare the plans
        </Button>
      </Box>
      {clk ? (
        <>
          <Wrapper>
            <BasicTable />
          </Wrapper>
        </>
      ) : (
        <></>
      )}
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
  text: {
    marginTop: 60,
    width: "45%",
    fontSize: 60,
    fontWeight: 800,
    color: theme.palette.text.primary,
  },
}));
