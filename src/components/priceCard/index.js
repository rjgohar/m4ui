import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "../../units/Button";

import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

export default function SimpleCard({
  title,
  price,
  feature1,
  feature2,
  feature3,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.textSection}>
        <Typography className="headText" variant="h5">
          {title}
        </Typography>
        <Typography variant="h1" className={classes.price}>
          {price}$
        </Typography>
        <Box pt={3}>
          <Typography variant="h4" className={classes.text}>
            {feature1}
          </Typography>{" "}
          <Typography variant="h4" className={classes.text}>
            {feature2}
          </Typography>
          <Typography variant="h4" className={classes.text}>
            {feature3}
          </Typography>
        </Box>
        <Box pt={1}>
          <Button className={classes.buttonOutlinedDrawer} variant="primary">
            {" "}
            Choose Plan
          </Button>
        </Box>
        <Box pt={1}>
          <Typography variant="h4" className={classes.text}>
            No Hidden Charges{" "}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "50px 0px",
    maxWidth: 350,
    width: "100%",
    height: 400,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    transition: "transform 500ms ease",
    alignItems: "center",
    color: " green",
    boxShadow:
      " rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;",
    "&:hover": {
      background: theme.palette.background.secondary,
      transform: "scale(1.1)",
      color: "white",
    },
  },

  textSection: {
    marginTop: 60,
    "&:hover .headText": {
      color: theme.palette.primary.main,
    },

    "& .headText": {
      fontSize: 20,
      fontWeight: 500,
      color: theme.palette.text.primary,
    },
  },
  text: { padding: "2px 0px", fontSize: "13px" },
  buttonOutlinedDrawer: { padding: "10px 15px" },
}));
