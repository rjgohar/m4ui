import React from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
} from "@material-ui/core";

// import PaginationRounded from "../Pagination";

export default function BasicTable({ head = null, body = null }) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.main} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className="tablehead">
          <TableRow className={classes.textrow}>{head}</TableRow>
        </TableHead>
        <TableBody className={classes.textcol}>{body}</TableBody>
      </Table>
    </TableContainer>
  );
}
const useStyles = makeStyles((theme) => ({
  main: {
    minWidth: "100%",
    margin: "auto",
    border: "none",
    borderRadius: "8px",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {},
  },
  table: {
    width: "100%",
    [theme.breakpoints.down("md")]: {
      scrollDirection: "horizontal",
      // scrollDehavior: "smooth",
    },
    "& .tablehead": {
      color: theme.palette.secondary.main,
    },
  },
  textrow: {
    frontWidth: 500,
    fontSize: 15,
    textTransform: "capitalize",
    color: theme.palette.primary,
  },

  textcol: {
    frontWidth: 400,
    color: theme.palette.secondary.main,
  },
  tableHeading: {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px  65px 30px 65px",
    color: theme.palette.text.primary,
    textTransform: "uppercase",
    fontSize: 15,
    fontWeight: 600,
  },
}));
