import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import mobileImage from "../../assests/mobile mockup.png";

const data = [
  {
    disc: "store data in cloud or on prem",
  },
  { disc: "take ownership of the nocode metadata" },
  { disc: "migration possible" },
];
const ApplicationSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img className={classes.image} src={mobileImage} alt="imag" />
      <div className={classes.textContainer}>
        <Typography variant="h1" className={classes.textHeading}>
          API4U Application take
          <span className={classes.innerText}> Ownership</span> of your{" "}
          <span className={classes.innerText}>Data</span>
        </Typography>
        <Typography variant="h4" className={classes.title}>
          with api4ui you stay owner of your data you can add the
        </Typography>
        {data.map(({ disc }) => {
          return (
            <div className={classes.dotContainer}>
              <div className={classes.dot}></div>
              <Typography variant="h4" className={classes.dotedDescription}>
                {disc}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ApplicationSection;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  image: {
    maxWidth: "490px",
    maxHeight: "542px",
    width: "100%",
    height: "100%",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "370px",
    color: theme.palette.text.primary,
  },
  textHeading: {
    fontWeight: "600",
    fontSize: "42px",
    lineHeight: "45px",
  },
  innerText: { color: theme.palette.secondary.main },
  title: {
    color: theme.palette.secondary.main,
    fontSize: 17,
    fontWeight: "200",
    padding: "15px 0px",
  },
  dotContainer: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "8px 0px",
  },
  dot: {
    width: 15,
    height: 15,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "50%",
  },
  dotedDescription: { fontSize: 18, fontWeight: "200" },
}));
