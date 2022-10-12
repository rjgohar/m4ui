import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import filtericon from "../../assests/filtericon.png";
import BlogsContent from "../../components/blogscontent";

export default function Blogs() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <Box className={classes.innerHead}>
          <Box className={classes.mainContainer}>
            <Box className={classes.topSection}>
              <input type="text" className="input" />
              <button className="button"> Search</button>
            </Box>

            <Box className={classes.sectionHead}>
              <Typography variant="h2" className="typo">
                {" "}
                all
              </Typography>

              <Typography variant="h2" className="typo">
                {" "}
                ideas
              </Typography>
              <Typography variant="h2" className="typo">
                {" "}
                questions
              </Typography>
              <Box className={classes.endTypo}>
                <img className="image" src={filtericon} alt="img" />
                <Typography variant="h2" className="typo">
                  {" "}
                  filter
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={classes.blogsContent}>
          {" "}
          <BlogsContent />
        </Box>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "30px 0px",
    background: theme.palette.primary.main,
  },

  inner: {
    width: "75%",
    margin: " auto",
    padding: "30px 0px",
    background: theme.palette.background.community,
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },

  mainContainer: {
    paddingTop: 20,
    paddingBottom: 60,
  },
  topSection: {
    paddingLeft: 25,
    display: "flex",

    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      paddingLeft: 0,
    },

    "& .input": {
      width: 600,
      padding: "10px 0px",
      border: "none",

      [theme.breakpoints.down("sm")]: {
        width: 400,
      },

      [theme.breakpoints.down("xs")]: {
        width: 200,
      },
      "&:focus": {
        outline: "none",
      },
    },

    "& .button": {
      background: theme.palette.secondary.main,
      color: theme.palette.text.primary,
      padding: "2px  0px",
      fontSize: 22,
      fontWeight: 800,
      width: 200,

      border: "none",

      [theme.breakpoints.down("xs")]: {
        width: 120,
      },
    },
  },

  sectionHead: {
    paddingTop: 30,
    display: "flex",
    color: theme.palette.text.primary,
    paddingLeft: 50,
    gap: 90,
    [theme.breakpoints.down("sm")]: {
      display: "grid",
      justifyContent: "center",

      textAlign: "center",
      gap: 15,
      gridTemplateColumns: "1fr 1fr",
    },

    "& .typo": {
      fontSize: 22,
      fontweight: 700,
      textTransform: "capitalize",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },

  endTypo: {
    display: "flex",

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      justifyContent: "center",
    },

    "& .image": {
      width: 20,
      height: 25,
    },
  },

  blogsContent: {
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: "auto",
    },
  },
}));
