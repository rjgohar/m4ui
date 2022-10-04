import { Box, makeStyles } from "@material-ui/core";
import React from "react";

import CommunityTabSection from "../headCommunityBlog";

import DataSectionInner from "../dataSectionCommunity/map";

import CommunityMapCards from "../cardCommunity/communityCards";

export default function CommunitySection() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <div>
        {" "}
        <Box>
          <CommunityTabSection />
        </Box>
        <Box>
          <DataSectionInner />
        </Box>
      </div>

      <div className={classes.diveend}>
        <CommunityMapCards />
      </div>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "grid",
    width: "75%",
    placeContent: "center",
    gridTemplateColumns: "2fr 1fr",
    paddingTop: 30,
    paddingBottom: 30,
    margin: "auto",
    backgroundColor: theme.palette.background.community,
    marginBottom: 40,
    marginTop: 40,

    [theme.breakpoints.down("md")]: {
      width: "90%",
      gridTemplateColumns: "1fr",
    },
  },
}));
