import { Avatar, Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CardVector1 from "../../assests/CardVector1.png";
import FolderIcon from "@material-ui/icons/Folder";

export default function Card({ header, image, description }) {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.avatarMain}>
        <Avatar className={classes.avatar}>
          {/* <FolderIcon /> */}
          <img src={image} />
        </Avatar>
      </Box>
      <Box className={classes.cardHead}>
        <Typography variant="h3" align="center">
          {header}
        </Typography>
      </Box>
      <Box className={classes.cardDes}>
        <Typography variant="h4" align="center">
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    width: "220px",
    height: "423px",
    boxShadow: "0px 4px 54px -10px rgba(0, 0, 0, 0.25)",
    borderRadius: "140px",
  },
  avatar: {
    background: theme.palette.secondary.main,
    width: "160px",
    height: "160px",
  },
  avatarMain: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "2.2em",
  },
  cardHead: {
    paddingTop: "1em",
    color: theme.palette.secondary.main,
  },
  cardDes: {
    padding: "1em",
    color: theme.palette.text.primary,
  },
}));
