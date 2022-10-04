import React from "react";
import { makeStyles } from "@material-ui/core";
import ava from "../../assests/ava.png";

import DataSecCommunity from "./index";

export default function DataSectionInner() {
  const classes = useStyles();
  return (
    <div className={classes.grid}>
      {Data.map(
        (
          {
            textUpper,
            ava,
            text1,
            text2,
            hitext,
            bodytext,
            regardtext,
            textEnd,
          },
          i
        ) => {
          return (
            <DataSecCommunity
              key={i}
              ava={ava}
              textUpper={textUpper}
              text1={text1}
              text2={text2}
              hitext={hitext}
              bodytext={bodytext}
              regardtext={regardtext}
              textEnd={textEnd}
            />
          );
        }
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));

const Data = [
  {
    ava: ava,
    textUpper: "API4UI FOR CREATIORS",
    text1: "DAMIEN COLLOT",
    text2: "4:00 SEPT 15,2022",
    hitext: "hi",
    bodytext:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident sunt inculpa qui officia deserunt mollit anim id est laborum.",
    regardtext: "regards",

    textEnd: "book mark this",
  },
  {
    ava: ava,
    textUpper: "API4UI FOR CREATIORS",
    text1: "DAMIEN COLLOT",
    text2: "4:00 SEPT 15,2022",
    hitext: "hi",
    bodytext:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident sunt inculpa qui officia deserunt mollit anim id est laborum.",
    regardtext: "regards",

    textEnd: "book mark this",
  },
];
