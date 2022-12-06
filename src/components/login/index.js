import { Box, makeStyles, Typography } from "@material-ui/core";
import TextField from "../input";
import React from "react";

import logo from "../../assests/logo.png";
import Buttons from "../../units/Button";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addLogIn } from "../../Features/signIn/signIn.action";
import { Alert } from "@material-ui/lab";

const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8).max(32).required("This field is required"),
});

export default function LoginSection() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginLoadingSucess } = useSelector((state) => state.LoginSlicer);
  const { data } = useSelector((state) => state.LoginSlicer.login);
  const { error } = useSelector((state) => state.LoginSlicer);

  if (loginLoadingSucess && data) {
    if (data?.token) {
      localStorage.setItem("mui4uJWTtoken", data?.token);
    }
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }
  return (
    <Box mb={10} className={classes.mainContainer}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SigninSchema}
        onSubmit={(values) => {
          // same shape as initial values
          const payload = {
            email: values.email,
            password: values.password,
          };

          // send to server

          dispatch(addLogIn(payload));
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
            <Box pt={6}>
              <img className={classes.logo} src={logo} alt="logo" />
            </Box>
            <Box>
              {loginLoadingSucess ? (
                <>
                  {" "}
                  {error ? (
                    <Alert severity="error">
                      <Typography variant="h5">{error}</Typography>
                    </Alert>
                  ) : (
                    <Alert severity="success">
                      <Typography variant="h5">Log In success</Typography>
                    </Alert>
                  )}
                </>
              ) : null}

              <br />
            </Box>
            <Box pt={3}>
              <TextField
                variant="outlined"
                placeholder="Email"
                type="email"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <Typography>{errors.email}</Typography>
              ) : null}
            </Box>
            <Box pt={3} pb={3}>
              <TextField
                variant="outlined"
                placeholder="Password"
                type="password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
              />
              {errors.password && touched.password ? (
                <Typography>{errors.password}</Typography>
              ) : null}
            </Box>
            <Box mt={1}>
              <Buttons
                className={classes.ButtonSignin}
                variant="contained"
                type="submit"
              >
                sign in
              </Buttons>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: 500,
    height: 500,
    textAlign: "center",
    borderRadius: "8px",
    backgroundColor: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  typo: {
    textAlign: "center",
    textTransform: "capitalize",
    color: theme.palette.primary.main,
  },
  ButtonSignin: {
    width: 180,
    textTransform: "capitalize",
    fontSize: 20,
    borderRadius: 25,
    fontWeight: 500,
  },

  logo: {
    width: 180,
    height: 50,
  },
}));
