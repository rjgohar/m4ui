import React from "react";
import { makeStyles } from "@material-ui/core";
import image from "../../assests/ava.png";
import CardCommunity from "./index";

export default function CommunityMapCards() {
  const classes = useStyles();
  return (
    <div className={classes.gridContainer}>
      {Data.map(({ image, text1, text2 }, index) => {
        return (
          <CardCommunity
            key={index}
            image={image}
            text1={text1}
            text2={text2}
          />
        );
      })}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: "0px 10px",
    marginTop: 40,
    display: "flex",
    flexDirection: "column",

    gap: 20,
    [theme.breakpoints.down("sm")]: {
      display: "grid",
      justifyItems: "center",
      gridTemplateColumns: "1fr 1fr",
    },
    [theme.breakpoints.down("xs")]: {
      display: "grid",
      placeContent: "start center",
      justifyItems: "center",
      gridTemplateColumns: "  1fr",
    },
  },
}));

export const Data = [
  { image: image, text1: "  damien collot", text2: " CEO of API4UI" },
  { image: image, text1: "  damien collot", text2: " CEO of API4UI" },
  { image: image, text1: "  damien collot", text2: " CEO of API4UI" },
  { image: image, text1: "  damien collot", text2: " CEO of API4UI" },
];
