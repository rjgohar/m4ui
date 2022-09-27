import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import MobileBg from "../../assests/mobile_mock_up.svg";
import Data from "../../components/card/data";
import Wrapper from "../../units/wrapper";
import Card from "../card";

export default function AppSection() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.container}>
        <Typography variant="h1" className={classes.header}>
          The No UI <br />
          Code Solution <br /> API4UI{" "}
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipisicing elit, sed do
          <br />
          eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.{" "}
        </Typography>
      </Box>
      <Box className={classes.main}>
        <Typography variant="h1" align="center">
          API4U makes a <br /> difference in
          <Typography variant="h1" className={classes.mainSecondary}>
            UI development
          </Typography>
        </Typography>
      </Box>
      <Box>
        <Box className={classes.cardContainer}>
          <Box className={classes.cardContainerGrid}>
            {Data.map((item) => {
              return (
                <>
                  <Card
                    header={item.header}
                    image={item.Image}
                    description={item.Description}
                  />
                </>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    backgroundImage: `url(${MobileBg})`,
    backgroundRepeat: "no-repeat",
    // width: "100%",
    height: "140vh",
  },
  main: {
    color: theme.palette.text.primary,
    padding: "8em 0em 3em 0em",
  },
  mainSecondary: {
    color: theme.palette.secondary.main,
  },
  cardContainer: {
    padding: "1em",
  },
  cardContainerGrid: {
    display: "flex",
    justifyContent: "center !important",
    alignItems: "center !important",
    gap: "2em",
    flexWrap: "wrap",
  },
  header: {
    color: theme.palette.text.primary,
    padding: "3.5em 0em 1em 2em",
    fontSize: "70px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "50px",
    },
  },
  paragraph: {
    color: theme.palette.text.primary,
    fontSize: "30px",
    paddingLeft: "5em",
  },
}));
