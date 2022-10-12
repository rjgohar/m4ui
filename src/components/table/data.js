import React from "react";
import { TableCell, TableRow, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import BasicTable from "./index";
const columns = ["API4UI features", "Community", "Pro", "Enterprise"];
const client = ["Web engine", "Y", "Y", "Y"];
const client1 = ["Mobile engine", "Y", "Y", "Y"];
const client2 = ["Client engine", "Y", "N", "Y"];
const client3 = ["All designs", "Y", "Y", "Y"];
const client4 = ["Custom themes", "Y", "Y", "Y"];
const client5 = ["Versioning", "Y", "Y", "Y"];
const client6 = ["Github issues", "Y", "Y", "Y"];
const client7 = ["Mail support", "N", "Y", "Y"];
const client8 = ["Consultancy", "", "", "*OnCheckout"];
const rows = [
  client,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
];
const FeatureArt = () => {
  const classes = useStyles();
  const head = columns.map((col, id) => (
    <TableCell key={id} className={classes.col} align="center">
      {col}
    </TableCell>
  ));
  const body = rows.map((row, id) => (
    <TableRow key={id}>
      {row.map((col) => (
        <TableCell className={classes.col} align="center">
          {col}
        </TableCell>
      ))}
    </TableRow>
  ));
  return <BasicTable head={head} body={body} />;
};
export default FeatureArt;
const useStyles = makeStyles((theme) => ({
  textcell: {
    color: theme.palette.secondary.main,
  },
  col: {
    color: theme.palette.text.primary,
    fontSize: "20px",
    fontWeight: 600,
  },
}));
