import React, { useState } from "react";
import Button from "../../units/Button";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowLeft";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";
import { Box, List, ListItem, SwipeableDrawer } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link to="/">
            <Typography variant="h3" className={classes.title}>
              LOGO
            </Typography>
          </Link>

          <div className={classes.titleContainer}>
            <div className={classes.pageHeadings}>
              <Typography variant="h4" className={classes.title}>
                freatures
              </Typography>
              <Typography variant="h4" className={classes.title}>
                pricing
              </Typography>
              <Link to="/blogs">
                <Typography variant="h4" className={classes.title}>
                  blog
                </Typography>
              </Link>
              <Typography variant="h4" className={classes.title}>
                videos
              </Typography>
              <Typography variant="h4" className={classes.title}>
                demo
              </Typography>
            </div>
            <div className={classes.buttonContainer}>
              <Link to="/community">
                <Button className={classes.buttonOutlined} variant="outlined">
                  {" "}
                  community
                </Button>
              </Link>
              <Button className={classes.buttonContained} variant="contained">
                {" "}
                Get Started
              </Button>
            </div>
          </div>

          <IconButton
            className={classes.menuContainer}
            onClick={() => {
              setOpen(true);
            }}
          >
            <MenuIcon className={classes.menuButton} />
          </IconButton>
          <SwipeableDrawer
            className={classes.SwipeDrawer}
            anchor="right"
            open={open}
            onClose={() => {
              setOpen(false);
            }}
            onOpen={() => {}}
          >
            <Box className={classes.arrowsection} p={2}>
              <Box display="flex" alignItems="center">
                <Typography variant="h3" className={classes.title}>
                  LOGO
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                {open ? (
                  <CancelIcon
                    className={classes.iconCross}
                    variant="contained"
                    fontSize="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  />
                ) : (
                  <></>
                )}
              </Box>
            </Box>
            <List className={classes.list}>
              <ListItem>
                {/* Put items Here */}
                <Box className={classes.HeaderLinks}>
                  <Box>
                    <Typography variant="h3" className={classes.HeaderItems}>
                      freatures
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h3" className={classes.HeaderItems}>
                      pricing
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h3" className={classes.HeaderItems}>
                      blog
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="h3" className={classes.HeaderItems}>
                      videos
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="h3" className={classes.HeaderItems}>
                      demo{" "}
                    </Typography>
                  </Box>
                </Box>
              </ListItem>
            </List>
            <div className={classes.drawerButtons}>
              <Link to="/community">
                <Button
                  className={classes.buttonOutlinedDrawer}
                  variant="outlined"
                >
                  {" "}
                  community
                </Button>
              </Link>
              <Button
                className={classes.buttonOutlinedDrawer}
                variant="contained"
              >
                {" "}
                Get Started
              </Button>
            </div>
          </SwipeableDrawer>
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
    background: theme.palette.background.primary,

    " & a": {
      color: theme.palette.primary.main,
      textDecoration: "none",
    },
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

    " & a": {
      color: theme.palette.primary.main,
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  buttonContainer: {
    display: "flex",
    gap: "12px",

    "& a": {
      textDecoration: "none",
    },
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
    "&:hover": {
      cursor: "pointer",
    },
  },
  menuButton: {
    width: 30,
    height: 30,
    color: theme.palette.primary.main,
  },

  SwipeDrawer: {
    "& .MuiPaper-root": {
      width: "100%",
      color: theme.palette.primary.main,
      background: theme.palette.background.primary,
    },
  },

  arrowsection: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
  },
  HeaderLinks: {
    textTransform: "uppercase",
    padding: "0px 10px",
  },
  HeaderItems: {
    padding: "10px 0px",
    color: theme.palette.primary.main,
    "& :hover": {
      cursor: "pointer",
    },
  },
  drawerButtons: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 20px",
  },
  buttonOutlinedDrawer: { height: "25px", width: "100%" },
}));
