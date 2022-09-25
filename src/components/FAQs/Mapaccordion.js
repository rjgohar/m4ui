import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Data from "./Data";
import FAQsdAccordions from "./index";
import dot from "../../assests/dot.png";

export default function Mapaccordion() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.headingfirst}>
        <Typography variant="h1">frequently asked questions</Typography>
      </Box>
      <Box className={classes.headingSecond}>
        <Typography variant="h1" className="typoo">
          what should you ask from{" "}
        </Typography>
        <Typography variant="h1" className="typoo">
          API4UI ?
        </Typography>
      </Box>
      <Box className={classes.main}>
        {Data.map((val, i) => {
          return (
            <FAQsdAccordions
              key={i}
              Question={val.Question}
              Answer={val.Answer}
            />
          );
        })}
      </Box>

      <Box>sglksks</Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    backgroundImage: `url(${dot})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  headingfirst: {
    paddingTop: 50,
    color: theme.palette.text.primary,
    textTransform: "capitalize",
    fontWeight: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headingSecond: {
    paddingTop: 50,

    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",

    "& .typoo": {
      background:
        "-webkit-linear-gradient(266.04deg, #242573 -4.02%, #A4FB7B 73.12%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textTransform: "capitalize",
      fontWeight: 700,
      fontSize: 50,
      alignItems: "center",
    },
  },
  main: {
    width: 900,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
