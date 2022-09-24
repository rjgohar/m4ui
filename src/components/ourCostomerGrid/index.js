import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import image from "../../assests/image.png";
const OurCustomer = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <img className={classes.image} src={image} alt="pic" />

      <div className={classes.textContainer}>
        <Typography variant="h1" className={classes.textHeading}>
          what our customers are talking about
        </Typography>
        <Typography variant="h5" className={classes.textPara}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor
        </Typography>
        <Typography variant="h4" className={classes.textHeading}>
          luis diaz{" "}
        </Typography>
      </div>
    </div>
  );
};

export default OurCustomer;

const useStyle = makeStyles((theme) => ({
  container: {
    padding: "50px 0px",
    backgroundColor: theme.palette.text.primary,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "25px",
  },
  textContainer: {
    textTransform: "capitalize",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: theme.palette.secondary.main,
    maxWidth: "360px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 10px",
    },
  },
  image: {
    width: 440,
    height: 400,
    [theme.breakpoints.down("sm")]: {
      width: 340,
      height: 300,
    },
  },
  textHeading: {
    padding: "10px 0px",
    lineHeight: "38px",
  },
  textPara: {
    maxWidth: "350px",
    padding: "5px 0px",
    fontSize: "17px",
    fontWeight: "400",
  },
}));
