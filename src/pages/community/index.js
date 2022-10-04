import { makeStyles } from "@material-ui/core";
import React from "react";
import CommunityHeader from "../../components/communityHeader";
import CommunitySection from "../../components/communityTabSec";

export default function Community() {
  const classes = useStyles();
  return (
    <div className={classes.gridSection}>
      <div>
        {" "}
        <CommunitySection />
      </div>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  gridSection: {
    background: theme.palette.primary.main,
  },
}));
