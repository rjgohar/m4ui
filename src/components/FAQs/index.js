import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core";

const FAQsdAccordions = ({ Question, Answer }) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        className={classes.accordion}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          className={classes.summary}
          expandIcon={
            expanded ? (
              <RemoveIcon className={classes.icons} />
            ) : (
              <AddIcon className={classes.icons} />
            )
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.secondaryHeading}>
            {Question}
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography className={classes.anstext}>{Answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FAQsdAccordions;

const useStyles = makeStyles((theme) => ({
  root: {
    background:'transparent',
    width: "100%",
    color: theme.palette.text.primary,
    "& .MuiTypography-root ": {
      color: theme.palette.text.primary,
    },
    " & .MuiDivider-root": {
      height: 0,
    },
  },
  accordion: { boxShadow: "none !important", 
background:"transparent"},
  heading: {
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    color: theme.palette.text.primary,
    fontWeight: 600,
    fontSize: 25,
    lineHeight: " 27px",
    textTransform: "capitalize",
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },

  summary: {
    "& .MuiSvgIcon-root": {
      textTransform: "capitalize",
    },
  },
  anstext: {
    fontweight: 500,
    fontSize: "18px",
    lineHeight: " 24px",
    textTransform: " capitalize",

    color: theme.palette.text.primary,
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
  icons: {
    width: 20,
    color: theme.palette.text.primary,
  },
}));
