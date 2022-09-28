import { Box, makeStyles } from "@material-ui/core";
import React from "react";

export default function VideoSection() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.frameContainer}>
        <iframe src="https://www.youtube.com/watch?v=ysd-zHamjkab_channel=SlyDogProduction"></iframe>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({}));
