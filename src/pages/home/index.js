import React from "react";
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
    </div>
  );
}

const useStyles = makeStyles((theme) => ({}));
