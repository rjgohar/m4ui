import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import image from "../../assests/ava.png";
import CardCommunity from "./index";
import { useDispatch, useSelector } from "react-redux";
import { getGithubValues } from "../../Features/github/github.action";

export default function CommunityMapCards() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { getIssue, getIssueLoadingSucess } = useSelector(
    (state) => state.GithubSlicer
  );

  useEffect(() => {
    dispatch(getGithubValues());
  }, [dispatch]);
  return (
    <div className={classes.gridContainer}>
      {getIssueLoadingSucess &&
        getIssue.map((item) => {
          return (
            <CardCommunity
              key={item.number}
              image={item.user?.avatar_url}
              text1={item.user?.login}
              text2={item.author_association}
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
