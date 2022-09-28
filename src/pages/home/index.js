import { makeStyles } from "@material-ui/core";
import React from "react";
import AppSection from "../../components/appSection";
import Mapaccordion from "../../components/FAQs/Mapaccordion";
import HeadSection from "../../components/headerSection";
import ApplicationSection from "../../components/m4uiApplicationSection";
import M4uiManageSec from "../../components/m4uimanageSection";
import OurCustomer from "../../components/ourCostomerGrid";
import RegisterMini from "../../components/registerminicampo";
import RegisterSection from "../../components/registerSection";
import SectionCount from "../../components/sectionCount";
import VideoSection from "../../components/videoCampo";

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <HeadSection />
      <AppSection />
      <SectionCount />
      <M4uiManageSec />

      <VideoSection />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({}));
