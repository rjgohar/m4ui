import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import MobileBg from "../../assests/mobile_mock_up.svg";
import Data from "../../components/card/data";
import Button from "../../units/Button";
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

        <Box className={classes.btnContainer}>
          {" "}
          <Button className={classes.btn2} variant="outlined">
            {" "}
            Download Now
          </Button>
        </Box>
      </Box>
      <Box className={classes.appContainer}>
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
              {Data.map((item, i) => {
                return (
                  <div key={i}>
                    <Card
                      header={item.header}
                      image={item.Image}
                      description={item.Description}
                    />
                  </div>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundSize: "cover",
    backgroundImage: `url(${MobileBg})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
  },
  appContainer: {
    minHeight: 750,
  },
  main: {
    color: theme.palette.text.primary,
    padding: "5em 0em 3em 0em",
  },
  mainSecondary: {
    color: theme.palette.secondary.main,
  },
  cardContainer: {
    padding: "2em",
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
    fontSize: "60px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "50px",
      textAlign: "center",
      padding: "1em",
    },
  },
  paragraph: {
    color: theme.palette.text.primary,
    fontSize: "25px",
    paddingLeft: "5em",
    paddingBottom: "1.5em",
    textTransform: "capitalize",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      textAlign: "center",
      padding: "0em",
    },
  },
  btnContainer: {
    padding: "2em 0em 6em 10em",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      padding: "2em",
    },
  },
}));
