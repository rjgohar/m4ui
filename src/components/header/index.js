import React, { useState } from "react";
import Button from "../../units/Button";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";
import { Box, List, ListItem, SwipeableDrawer } from "@material-ui/core";

export default function ButtonAppBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

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
                  <KeyboardArrowLeftIcon
                    variant="contained"
                    color="primary"
                    fontSize="large"
                  />
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
              <Button className={classes.buttonOutlined} variant="outlined">
                {" "}
                community
              </Button>
              <Button className={classes.buttonContained} variant="contained">
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

  SwipeDrawer: {
    "& .MuiPaper-root": {
      width: "100%",
      color: theme.palette.primary.main,
      background: "linear-gradient(88.55deg, #A4FB7B -19.41%, #1B1772 115.44%)",
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
  drawerButtons: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 20px",
  },
}));
