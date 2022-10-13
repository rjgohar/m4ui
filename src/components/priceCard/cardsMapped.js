import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import SimpleCard from ".";

const Data = [
  {
    title: "Community ",
    price: "Free",
    feature1: "Web Engine ",
    feature2: "Mobile Engine",
    feature3: "Client Engine ",
    feature4: "Github Issues ",
    buttonVal: "Start Free",
  },
  {
    title: "Pro",
    price: "99$",
    feature1: "Web Engine ",
    feature2: "Mobile Engine",
    feature3: "Github Issues  ",
    feature4: "Mail Support ",
    buttonVal: "Buy Now",
  },
  {
    title: "Enterprise",
    price: "Custom",
    feature1: "Web Engine ",
    feature2: "Mobile Engine",
    feature3: "Client Engine ",
    feature4: "Github Issues ",
    feature5: "Mail Support ",
    feature6: "Consultancy",
    feature7: "Customisation",
    buttonVal: "Buy Now",
  },
];

const CardMapped = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {Data.map(
        ({
          title,
          price,
          feature1,
          feature2,
          feature3,
          feature4,
          feature5,
          feature6,
          feature7,
          buttonVal,
        }) => {
          return (
            <>
              <SimpleCard
                title={title}
                price={price}
                feature1={feature1}
                feature2={feature2}
                feature3={feature3}
                feature4={feature4}
                feature5={feature5}
                feature6={feature6}
                feature7={feature7}
                buttonVal={buttonVal}
              />
            </>
          );
        }
      )}
    </div>
  );
};

export default CardMapped;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
}));
