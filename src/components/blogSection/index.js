import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import BlogCard from "../blogCard";

const BlogSection = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography variant="body1" className="typo" align="center">
        Latest News And Articles
      </Typography>
      <Typography variant="h1" className="typo2" align="center">
        Checkout Our Blogs
      </Typography>
      <Box className={classes.blogContainer}>
        <BlogCard />
      </Box>
    </Box>
  );
};

export default BlogSection;

const useStyles = makeStyles((theme) => ({
  container: {
    background: "linear-gradient(255.94deg, #242573 -10.61%, #A4FB7B 98.68%)",
    width: "100%",
    height: "600px",
    "& .typo": {
      color: theme.palette.secondary.main,
      paddingTop: "2em",
    },
    "& .typo2": {
      color: theme.palette.primary.main,
    },
  },
  blogContainer: {
    padding: "2em",
  },
}));
