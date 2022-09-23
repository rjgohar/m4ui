import React from "react";
import Button from "../../units/Button";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h3" className={classes.title}>
            LOGO
          </Typography>

          <div className={classes.titleContainer}>
            <div className={classes.pageHeadings}>
              <Typography variant="h4" className={classes.title}>
                freatures
              </Typography>
              <Typography variant="h4" className={classes.title}>
                pricing
              </Typography>
              <Typography variant="h4" className={classes.title}>
                blog
              </Typography>
              <Typography variant="h4" className={classes.title}>
                videos
              </Typography>
              <Typography variant="h4" className={classes.title}>
                demo
              </Typography>
            </div>
            <div className={classes.buttonContainer}>
              {" "}
              <Button className={classes.buttonOutlined} variant="outlined">
                {" "}
                community
              </Button>
              <Button className={classes.buttonContained} variant="contained">
                {" "}
                Get Started
              </Button>
            </div>
          </div>

          <IconButton className={classes.menuContainer}>
            <MenuIcon className={classes.menuButton} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "grid",
    color: theme.palette.primary.main,
    gridTemplateColumns: "0.7fr 1fr ",
    background: "linear-gradient(88.55deg, #A4FB7B -19.41%, #1B1772 115.44%)",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
  },
  buttonOutlined: { height: "25px" },
  buttonContained: { height: "25px", width: "140px" },
  pageHeadings: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  buttonContainer: {
    display: "flex",
    gap: "12px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuContainer: {
    width: 70,
    height: 70,

    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  title: {
    padding: "7px",
    textTransform: "uppercase",
  },
  menuButton: {
    width: 30,
    height: 30,
    color: theme.palette.primary.main,
  },
}));
