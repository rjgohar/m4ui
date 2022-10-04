import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Blog1 from "../../assests/Blog1.png";
import HeartVector from "../../assests/HeartVector.png";

const BlogCard = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.description}>
        <Typography variant="h4 " className={classes.typo}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </Typography>
        <Box className={classes.imageContainer}>
          <img
            src={HeartVector}
            alt="Favourite Button"
            style={{ width: "20px", height: "20px" }}
          />{" "}
        </Box>
      </Box>
    </Box>
  );
};

export default BlogCard;

const useStyles = makeStyles((theme) => ({
  container: {
    width: "340px",
    height: "410px",
    background: `url(${Blog1})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "cover",
    position: "relative",
  },
  description: {
    position: "absolute",
    bottom: 0,
    background: theme.palette.text.primary,
  },
  typo: {
    color: theme.palette.secondary.main,
    textAlign: "left",
    display: "flex",
    textTransform: "capitalize",
    // padding: "2em",
    // paddingLeft: "2em",
    padding: "0.2em 0em 0em 2em",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "flex-end",
    // paddingRight: "1em",
    padding: "0em 1em 1em 0em",
  },
}));
