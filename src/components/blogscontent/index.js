import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ava from "../../assests/ava.png";

export default function BlogsContent() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Box className={classes.avatorContainer}>
        <Box>
          <div className={classes.imageSection}>
            <img className="image" src={ava} alt="img" />
          </div>
        </Box>

        <Box>
          <Typography variant="h1" className={classes.textUpper}></Typography>
          <div className={classes.innertext}>
            {" "}
            <Typography variant="h2" className="typo">
              Blogs{" "}
            </Typography>
            <Typography variant="h2">by DAMIEN COLLOT </Typography>
          </div>
        </Box>
      </Box>
      <Box className={classes.boxtext}>
        <Typography className="typoo" variant="body1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </Box>
      <Box className={classes.boxtext}>
        <Typography className="typoo" variant="body1">
          Why do we use it? It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop
          publishing packages and web page
        </Typography>
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    margin: "0px 20px",
    backgroundColor: theme.palette.primary.main,
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      justifyItems: "center",

      margin: "0px 0px",
    },
  },
  imageSection: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: theme.palette.background.community,

    "& .image": {
      width: 90,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 90,
      margin: "auto",
      borderRadius: 50,
    },
  },

  avatorContainer: {
    paddingTop: 40,
    paddingLeft: 100,
    display: "flex",
    gap: 20,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      paddingLeft: 0,
    },
  },

  textUpper: {
    color: theme.palette.secondary.main,
    fontSize: 40,
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      textAlign: "center",
    },
  },
  innertext: {
    fontSize: 18,
    fontWeight: 700,
    display: "flex",
    flexDirection: " column",
    gap: 10,
    textTransform: "uppercase",
    color: theme.palette.text.primary,

    [theme.breakpoints.down("sm")]: {
      flexDirection: " column",
      textAlign: "center",
      gap: 10,
      paddingTop: 40,
    },

    " & .typo": {
      fontSize: 30,
      fontWeight: 800,
      color: theme.palette.secondary.main,
      [theme.breakpoints.down("sm")]: {
        fontSize: 25,
      },
    },
  },

  boxtext: {
    padding: " 20px 90px",
    color: theme.palette.text.primary,

    "& .typoo": {
      padding: " 20px",
      fontSize: 25,
      fontWeight: 400,
    },
  },
}));
