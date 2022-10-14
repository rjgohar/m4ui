import { TextField, withStyles } from "@material-ui/core";

export default withStyles((theme) => ({
  root: {
    maxWidth: "380px",

    border: "none",

    "& .MuiOutlinedInput-root": {
      outline: "none",
      borderRadius: "27px",
      border: "0.2px solid " + theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-input": {
      padding: "8px 20px",
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "0px 10px",
    },
  },
}))(TextField);
