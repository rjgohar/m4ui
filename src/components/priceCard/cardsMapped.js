import { makeStyles } from "@material-ui/core";
import React from "react";
import SimpleCard from ".";

const Data = [
  {
    title: "Basic Package",
    price: 90,
    feature1: " Extra Features",
    feature2: " Lifetime Free Support",
    feature3: " Full Access",
  },
  {
    title: "Standard Package",
    price: 100,
    feature1: " Extra Features",
    feature2: " Lifetime Free Support",
    feature3: " Full Access",
  },
  {
    title: "Ultimate Package",
    price: 120,
    feature1: " Extra Features",
    feature2: " Lifetime Free Support",
    feature3: " Full Access",
  },
];

const CardMapped = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {Data.map(({ title, price, feature1, feature2, feature3 }) => {
        return (
          <>
            <SimpleCard
              title={title}
              price={price}
              feature1={feature1}
              feature2={feature2}
              feature3={feature3}
            />
          </>
        );
      })}
    </div>
  );
};

export default CardMapped;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
  },
}));
