import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import filtericon from "../../assests/filtericon.png";

export default function CommunityTabSection() {
  const classes = useStyles();
  return (
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
          Blogs
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
  );
}

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: 20,
    paddingBottom: 60,
  },
  topSection: {
    paddingLeft: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
    },

    "& .input": {
      width: 645,
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

    justifyContent: "space-evenly",
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
}));
