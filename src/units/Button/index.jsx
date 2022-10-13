import { alpha, Button, withStyles } from "@material-ui/core";

/**
 * @dev custom button designed upon Material UI's Button component. It accepts all props the MuI button accepts. moreover, the following props have been overridden. the default styles is contained primary
 * @props variant can be either contained or outlined
 * @props color can be primary or secondary
 */
export default withStyles((theme) => ({
  root: {
    borderWidth: 1,
    fontSize: 12,

    textAlign: "center",

    fontWeight: 700,
    fontsize: 21,
  },

  outlined: {
    color: theme.palette.secondary.main,
    background: "transparent",
    margin: "0px 5px",
    borderRadius: 5,
    textAlign: "center",
    border: "1px solid" + theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: "transparent",
      transform: "scale(1.03)"
    },
  },

  contained: {
    color: theme.palette.text.primary,

    backgroundColor: theme.palette.secondary.main,
    borderRadius: 5,
    transition: "all 0.9s ease",
    "&:hover": {
      backgroundColor: alpha(theme.palette.secondary.main, 0.7),
      color: theme.palette.text.primary,
      transform: "scale(1.03)",
    },
  },
  containedPrimary:{  
    color: theme.palette.primary.main,
    padding:"10px",
    background: theme.palette.background.secondary,
    borderRadius: 5,
    transition: "all 0.9s ease",
    "&:hover": {
      background: theme.palette.primary.main,
      color: theme.palette.text.secondary,
      transform: "scale(1.03)",
    },
  },
  containedSecondary:{
    color: theme.palette.primary.main,
    padding:"10px",
    background: theme.palette.text.primary,
    borderRadius: 5,
    transition: "all 0.9s ease",
    "&:hover": {
      background: theme.palette.primary.main,
      color: theme.palette.text.secondary,
      transform: "scale(1.03)",
    },

  }
}))(Button);
