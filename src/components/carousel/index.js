import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { IconButton, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const Carousel = ({ children, arrowsInside, ...props }) => {
  const settings = {
    ...props,
    infinite: true,
    nextArrow: <Arrow reverse />,
    prevArrow: <Arrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const classes = useStyles();
  return (
    <Slider
      {...settings}
      className={clsx({ [classes.arrowsInsideItem]: !arrowsInside })}
    >
      {children}
    </Slider>
  );
};
export default Carousel;

const Arrow = ({ reverse, currentSlide, slideCount, ...props }) => {
  const classes = useStyles();
  return (
    <IconButton
      {...props}
      className={clsx(classes.arrowButton, {
        [classes.alignArrowLeft]: !reverse,
        [classes.alignArrowRight]: reverse,
        "slick-disabled": currentSlide === slideCount,
      })}
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <ArrowForwardIosIcon
        className={clsx({
          [classes.arrowReversed]: !reverse,
        })}
      />
    </IconButton>
  );
};

const useStyles = makeStyles((theme) => ({
  arrowButton: {
    width: 38,
    height: 38,
    // background: theme.palette.secondary.main,
    display: "grid !important",
    placeContent: "center",
    fontSize: 10,
    position: "absolute",
    top: "50%",
    zIndex: 100,
    transform: "translateY(-50%)",
    // "&:hover": {
    //   background: theme.palette.primary.main,
    // },
  },
  arrowReversed: {
    transform: "rotate(180deg)",
  },
  arrowsInsideItem: {
    padding: "0 40px",
  },
  alignArrowLeft: {
    left: 0,
  },
  alignArrowRight: {
    right: 0,
  },

  Carousel: {
    display: "flex",
  },
}));
