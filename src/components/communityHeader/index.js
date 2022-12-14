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

import { Box, List, ListItem, SwipeableDrawer } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserProfile from "../userLogin";

export default function CommunityHeader() {
  const classes = useStyles();
  const isAuthenticated = useSelector(
    (state) => state.LoginSlicer.isAuthenticated
  );
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOnHover = (event) => {
    setAnchorEl(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box className={classes.buttonscont}>
        {!isAuthenticated ? (
          <>
            {" "}
            <Link to="/signup">
              <Button className={classes.button} variant="outlined">
                {" "}
                Sign Up
              </Button>
            </Link>
            <Box>
              <Link to="/login">
                <Button className={classes.button} variant="outlined">
                  {" "}
                  Login
                </Button>
              </Link>
            </Box>
          </>
        ) : (
          <>
            <UserProfile />
          </>
        )}
      </Box>

      <AppBar position="static" className={classes.headerMargin}>
        <Toolbar className={classes.toolbar}>
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>

          <div className={classes.titleContainer}>
            <div className={classes.pageHeadings}>
              <>
                <Typography variant="h4" className={classes.title}>
                  Feed
                </Typography>
              </>
              <Typography variant="h4" className={classes.title}>
                Members
              </Typography>
            </div>
            <div className={classes.buttonContainer}>
              <Link to="/issue">
                <Button
                  className={classes.buttonOutlined}
                  variant="containedSecondary"
                >
                  {" "}
                  Create Issues
                </Button>
              </Link>
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
                <Link to="/">
                  <img src={logo} alt="logo" className={classes.logo} />
                </Link>
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
                        Feed
                      </Typography>
                    </>
                  </Box>
                  <Box>
                    <Typography variant="h3" className={classes.HeaderItems}>
                      Members
                    </Typography>
                  </Box>
                </Box>
              </ListItem>
            </List>
            <div className={classes.drawerButtons}>
              <Link to="/issue">
                <Button
                  className={classes.buttonOutlinedDrawer}
                  variant="containedSecondary"
                >
                  {" "}
                  Create Issues
                </Button>
              </Link>
            </div>
          </SwipeableDrawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  buttonscont: {
    paddingTop: 5,
    paddingBottom: 5,
    display: "flex",
    justifyContent: "end",
    position: "relative",
    top: "4px",
    right: "50px",
    [theme.breakpoints.down("sm")]: {
      right: "80px",
    },
  },
  headerMargin: {
    marginTop: "8px",
  },
  toolbar: {
    display: "grid",
    color: theme.palette.primary.main,
    gridTemplateColumns: "0.7fr 1fr ",
    background: theme.palette.background.communityHeader,
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
    justifyContent: "end",
    paddingRight: 50,
    gap: "30px",
  },
  buttonOutlined: { height: "40px", fontSize: "16px", fontWeight: 700 },

  pageHeadings: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
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
      background: theme.palette.background.communityHeader,
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
  logo: {
    width: "200px",
    height: "60px",
  },
  drawerButtons: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 20px",
  },
  buttonOutlinedDrawer: { height: "25px", width: "100%" },

  CancelIconbtn: {
    width: 30,
    height: 30,
    position: "relative",
    top: -40,

    float: "right",
    cursor: "pointer",
  },

  button: {
    width: 100,
    padding: 0,
  },
}));
