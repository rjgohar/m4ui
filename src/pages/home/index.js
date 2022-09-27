import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import AppSection from "../../components/appSection";
import HeadSection from "../../components/headerSection/inex";

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <HeadSection />
      <AppSection />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({}));
