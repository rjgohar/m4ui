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
import logo from "../../assests/logo.png";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { Box, List, ListItem, SwipeableDrawer } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOnHover = (event) => {
    setAnchorEl(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const SimpleMenu = () => {
    return (
      <div>
        <Menu
          anchorOrigin={{ horizontal: "center", vertical: "center" }}
          transformOrigin={{ horizontal: "center", vertical: "center" }}
          className={classes.menudropdown}
          aria-controls="simple-menu"
          aria-haspopup="true"
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <div style={{ paddingTop: "30px", paddingLeft: "45px" }}>
            <CancelIcon
              className={classes.CancelIconbtn}
              onClick={handleClose}
            />
            <Typography variant="h4"> Features</Typography>
          </div>
          <div className={classes.inner}>
            <div>
              <MenuItem className="container">sample</MenuItem>
              <MenuItem className="container">sample</MenuItem>
              <MenuItem className="container">sample</MenuItem>
              <MenuItem className="container">sample</MenuItem>
              <MenuItem className="container">sample</MenuItem>
            </div>
            <div>
              <MenuItem className="container">sample</MenuItem>
              <MenuItem className="container">sample</MenuItem>
              <MenuItem className="container">sample</MenuItem>
              <MenuItem className="container">sample</MenuItem>
              <MenuItem className="container">sample</MenuItem>
            </div>
          </div>
        </Menu>
      </div>
    );
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>

          <div className={classes.titleContainer}>
            <div className={classes.pageHeadings}>
              <>
                <Typography
                  variant="h4"
                  className={classes.title}
                  onClick={handleOnHover}
                >
                  freatures
                </Typography>
                <SimpleMenu />
              </>
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
                <img src={logo} alt="logo" className={classes.logo} />
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
                    <>
                      <Typography variant="h3" className={classes.HeaderItems}>
                        freatures
                      </Typography>
                    </>
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

    "& .logo": {
      paddingTop: 14,
      width: 200,
      height: 60,
      [theme.breakpoints.down("sm")]: {
        padding: "8px 0px",
        width: 200,
      },
      [theme.breakpoints.down("sm")]: {
        padding: "5px 0px",
        width: 200,
      },
    },
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
    justifyContent: "space-around",
    margin: "0px 10px ",
  },
  buttonOutlinedDrawer: { height: "25px", width: "150px" },

  menudropdown: {
    color: theme.palette.primary.main,
    "& .MuiMenu-paper   ": {
      position: "relative",
      top: "60px !important",
      marginLeft: 110,
      width: 820,
      height: 400,
      [theme.breakpoints.down("md")]: {
        marginLeft: 20,
        width: 730,
      },
    },
  },

  inner: {
    display: "grid",
    margin: " 10px 30px",
    columnGap: 20,

    gridTemplateColumns: "1fr 1fr",

    "& .container": {
      paddingTop: 10,
    },
  },
  logo: {
    width: 200,
    height: 50,
  },

  CancelIconbtn: {
    width: 30,
    height: 30,
    position: "relative",
    top: -40,

    float: "right",
    cursor: "pointer",
  },
}));
