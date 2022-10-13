import React from "react";
import MediaCard from "./index";
import image1 from "../../assests/im1.png";
import image2 from "../../assests/im2.png";
import image3 from "../../assests/im3.png";
import { makeStyles } from "@material-ui/core";
const Data = [
  {
    imag: image1,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imag: image2,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imag: image3,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imag: image1,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imag: image2,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imag: image3,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const SliderCardMapped = () => {
  const classes = useStyles();
  const child = Data.map(({ imag, des }) => {
    return (
      <div className={classes.container}>
        <MediaCard imag={imag} des={des} />
      </div>
    );
  });
  return child;
};

export default SliderCardMapped;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
}));
