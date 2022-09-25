import { Box, makeStyles, Typography } from "@material-ui/core";
import dev from "../../assests/Devices.png";
import dev2 from "../../assests/Studio.png";
import React from "react";

export default function M4uiManageSec() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.mainContainer}>
        <Box className={classes.leftSection}>
          <Typography variant="h1" className={classes.TypographyHead}>
            API4U Easy To Manage
          </Typography>
          <Box className={classes.innerSection}>
            <Box className={classes.devciesSection}>
              <Box className={classes.picCover}>
                <img className="image" src={dev} alt="img" />
              </Box>
              <Box>
                {" "}
                <Typography variant="h4" className={classes.typoo}>
                  multi-plateform UI
                </Typography>
              </Box>
            </Box>
            <Box className={classes.devciesSection}>
              <Box className={classes.picCover}>
                <img className="image" src={dev2} alt="img" />
              </Box>
              <Box>
                {" "}
                <Typography variant="h4" className={classes.typoo}>
                  API4UI STUDIO
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={classes.textSection}>
            <Typography variant="body1" className={classes.typ}>
              easily target multiple uI technologies all design in{" "}
              <span className={classes.span}>aPI4UI</span>
              studio
            </Typography>
          </Box>
        </Box>

        <Box></Box>
      </Box>

      <div>hahh</div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: 90,
    height: 450,
    backgroundColor: theme.palette.text.primary,
    display: "flex",
    gap: 40,
    justifyContent: "space-around",
  },
  leftSection: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 20,
  },
  TypographyHead: {
    width: 400,
    color: theme.palette.secondary.main,
    fontWeight: 600,
    fontSize: 50,
    textTransform: "capitalize",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      fontSize: 45,
      width: "100%",
    },
  },
  innerSection: {
    paddingTop: 20,
    display: "flex",
    gap: 10,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 30,
    },
  },

  devciesSection: {
    display: "flex",
    gap: 10,
    [theme.breakpoints.down("xs")]: {
      gap: 15,
    },
  },
  picCover: {
    width: 80,
    height: 80,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.background.secondary,
    "& .image": {
      width: 50,
      height: 50,
      alignItems: "center",
    },
  },
  typoo: {
    paddingTop: 20,
    width: 100,
    color: theme.palette.secondary.main,
    fontSize: 15,
    [theme.breakpoints.down("xs")]:{
      paddingTop: 30,
      width:200,
    }
  },
  span: {
    textTransform: "uppercase",
  },

  textSection: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      paddingLeft: 20,
      justifyContent: "center",
      textAlign: "center",
    },
  },
  typ: {
    paddingTop: 15,
    width: 360,
    wordSpacing: 1,
    textTransform: "capitalize",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 20,
    },
  },
}));
