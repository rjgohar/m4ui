import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import RichTextEditor from "../../components/DescriptionBox";

export default function Issue() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.inner1}>
        <Typography variant="h2" className="typo">
          {" "}
          create a new issue
        </Typography>
      </div>

      <Box className={classes.inner2}>
        <RichTextEditor />
      </Box>
    </div>
  );
}

export const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    gap: 40,
  },
  inner1: {
    paddingTop: 90,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .typo": {
      fontSize: 50,
      fontWeight: 800,
      textTransform: "capitalize",
      color: theme.palette.text.primary,
    },
  },

  inner2: {
    width: "70%",
    margin: "auto",
  },
}));
