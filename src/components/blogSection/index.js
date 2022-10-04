import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import BlogCard from "../blogCard";
import BlogpostCarousel from "../Carousels/blogpost";

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
        <BlogpostCarousel>
          {Array(6)
            .fill(1)
            ?.map((item, i) => (
              <div>
                <Box className={classes.cardWrapper}>
                  <BlogCard />
                </Box>
              </div>
            ))}
        </BlogpostCarousel>
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
  cardWrapper: {
    display: "flex",
    justifyContent: "center",
    rowGap: "10px ",
  },
}));
