import React from "react";
import { makeStyles } from "@material-ui/core";
import ava from "../../assests/ava.png";
import DataSecCommunity from "./index";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGithubValues } from "../../Features/github/github.action";

export default function DataSectionInner() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { getIssue, getIssueLoadingSucess } = useSelector(
    (state) => state.GithubSlicer
  );

  useEffect(() => {
    dispatch(getGithubValues());
  }, [dispatch]);
  return (
    <div className={classes.grid}>
      {getIssueLoadingSucess &&
        getIssue.map((i) => {
          return (
            <DataSecCommunity
              key={i.number}
              ava={i.user?.avatar_url}
              text1={i.user?.login}
              text2={i.created_at}
              hitext={i.number}
              bodytext={i.body}
              textEnd={i.textEnd}
            />
          );
        })}
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

//
