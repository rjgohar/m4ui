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
    color: theme.palette.text.primary,
    background: theme.palette.secondary.main,
    margin: "0px 5px",
    borderRadius: 41,
    "&:hover": {
      backgroundColor: alpha(theme.palette.secondary.main, 0.7),
    },
  },

  contained: {
    color: theme.palette.secondary.main,
    border: "1px solid" + theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 25,
    transition: "all 0.9s ease",
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.light),
      color: theme.palette.text.primary,
      transform: "scale(1.03)",
    },
  },
}))(Button);
