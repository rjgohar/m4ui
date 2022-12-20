import { Box, makeStyles, Typography } from "@material-ui/core";
import mail from "../../assests/mail.png";
import Button from "../../units/Button";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addNewsletter } from "../../Features/newsletter/newsletter.action";
import { addIssue } from "../../Features/github/github.action";

const emailSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
});

export default function RegisterMini() {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Box className={classes.mainContainer}>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={emailSchema}
        onSubmit={(values) => {
          // same shape as initial values
          const payload = {
            email: values.email,
          };

          // send to server

          dispatch(addNewsletter(payload));
          // dispatch(addIssue());
        }}
      >
        {({
          errors,
          touched,
          values,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            {" "}
            <Box className={classes.mailContainer}>
              <img src={mail} alt="imge" />
            </Box>
            <Box>
              {" "}
              <input
                className={classes.input}
                type="email"
                placeholder="enter your email address"
                variant="outlined"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
              />
              {/* <Box>
                {errors.email && touched.email ? (  
                  <Typography>{errors.email}</Typography>
                ) : null}
              </Box> */}
            </Box>
            <Box className={classes.btnSection}>
              <Button variant="outlined" className="btn" type="submit">
                {" "}
                register Now
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    position: "relative",
    display: "flex",
    width: "97%",
    height: 90,
    borderRadius: 50,
    margin: "auto",
    bottom: -40,

    background: theme.palette.background.registerSection,
  },
  mailContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    borderRadius: 50,
    left: 10,
    top: 5,
    backgroundColor: theme.palette.text.primary,
    position: "absolute",
    zIndex: 999,
    [theme.breakpoints.down("xs")]: {
      top: 15,
      left: 5,
      width: 60,
      height: 60,
    },
  },

  input: {
    position: "absolute",
    left: 120,
    top: 30,
    background: "transparent",
    border: 0,
    borderBottom: " 1px solid white",
    boxSizing: "border-box",
    color: theme.palette.primary.main,
    display: "block",

    outline: "none !important",
    opacity: 0.6,
    paddingBottom: 5,

    width: "750px",

    " &::placeholder": {
      color: theme.palette.primary.main,
    },

    [theme.breakpoints.down("sm")]: {
      left: 100,
      width: 300,
    },
    [theme.breakpoints.down("xs")]: {
      left: 80,
      width: 110,
    },
  },

  btnSection: {
    position: "absolute",
    right: 100,
    top: 30,
    [theme.breakpoints.down("sm")]: {
      right: 40,
    },
    [theme.breakpoints.down("xs")]: {
      right: 10,
    },

    "& .btn": {
      [theme.breakpoints.down("sm")]: {
        fontSize: 11,
        textTransform: "capitalize",

        width: 110,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 11,
        textTransform: "capitalize",
        margin: 0,
        padding: 2,
        width: 110,
      },
    },
  },
}));
