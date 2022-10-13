import React from "react";
import { TableCell, TableRow, Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import BasicTable from "./index";
import { Check } from "@material-ui/icons";

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const columns = ["API4UI features", "Community", "Pro", "Enterprise"];
const client = ["Web engine", "🗸", "🗸", "🗸"];
const client1 = ["Mobile engine", "🗸", "🗸", "🗸"];
const client2 = ["Client engine", "🗸", "⨯", "🗸"];
const client3 = ["All designs", "🗸", "🗸", "🗸"];
const client4 = ["Custom themes", "🗸", "🗸", "🗸"];
const client5 = ["Versioning", "🗸", "🗸", "🗸"];
const client6 = ["Github issues", "🗸", "🗸", "🗸"];
const client7 = ["Mail support", "⨯", "🗸", "🗸"];
const client8 = ["Consultancy", "⨯", "⨯", "*OnCheckout"];
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
    <StyledTableRow key={id}>
      {row.map((col) => (
        <TableCell className={classes.col} align="center">
          {col}
        </TableCell>
      ))}
    </StyledTableRow>
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
