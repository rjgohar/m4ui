import { makeStyles } from "@material-ui/core";
import React from "react";
import AppSection from "../../components/appSection";
import Mapaccordion from "../../components/FAQs/Mapaccordion";
import HeadSection from "../../components/headerSection";
import M4uiManageSec from "../../components/m4uimanageSection";
import SectionCount from "../../components/sectionCount";

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <HeadSection />
      <AppSection />
      <M4uiManageSec />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({}));
