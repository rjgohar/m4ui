import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import image1 from "../../assests/im1.png";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { Box } from "@material-ui/core";

export default function MediaCard({ imag, des }) {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box
        style={{
          height: "59%",
          backgroundImage: `url(${imag})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></Box>
      <Box className={classes.textContainer}>
        <Typography variant="h4" style={{ fontWeight: 200 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Typography>

        <Box className={classes.iconContainer}>
          <IconButton
            aria-label="add to favorites"
            style={{ width: "20px", height: "20px" }}
          >
            <FavoriteIcon
              style={{
                width: "20px",
                height: "20px",
                color: "#A4FB7B",
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 270,
    height: 290,
    transition: "transform 500ms ease",
    "&:hover": {
      transform: "scale(1.2)",
    },
    [theme.breakpoints.down("sm")]: {
      width: 310,
    },
  },
  textContainer: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.text.primary,
    padding: 10,
  },
  iconContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));
