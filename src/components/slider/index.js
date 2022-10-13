import React from "react";
import { makeStyles } from "@material-ui/core";
import Carousel from "react-elastic-carousel";
import SliderCardMapped from "../sliderCard/slidercardmapped";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const breakPoints = [
  { width: 400, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const Slider = (props) => {
  const classes = useStyles();
  console.log(props.breakPoints);
  return (
    <div className={classes.container}>
      <Box>
        <Typography variant="h3" className={classes.text}>
          latest news and articles
        </Typography>
        <Typography variant="h2" className={classes.textHeading}>
          checkout our blogs{" "}
        </Typography>
      </Box>
      <div className={classes.innerContainer}>
        <Carousel
          {...props}
          autoPlaySpeed={5000}
          enableAutoPlay
          disableArrowsOnEnd={false}
          breakPoints={breakPoints}
          infinite={true}
          pagination={false}
          itemsToShow={4}
          itemsToScroll={1}
        >
          <SliderCardMapped />
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "40px 0px",
    background: theme.palette.background.carusal,
  },
  text: {
    fontWeight: 400,
    color: theme.palette.secondary.main,
    textAlign: "center",
    textTransform: "capitalize",
  },
  textHeading: {
    fontWeight: 700,
    fontSize: "45px",
    textAlign: "center",
    color: theme.palette.primary.main,
    textTransform: "capitalize",
  },
  innerContainer: {
    width: "100%",
    "& div.rec-carousel-item": {
      "&:focus": {
        outline: "none",
        boxShadow: "inset 0 0 1px 0px #fff",
      },

      "& .bkVSTc": {
        display: "none",
      },
      "& .fAVBsF": {
        height: "400px",
        display: "flex",
        alignItems: "center",
        gap: 30,
      },
    },
  },
}));
