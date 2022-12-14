import { Box, makeStyles, Typography } from "@material-ui/core";
import TextField from "../input";
import React from "react";
import Buttons from "../../units/Button";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addSignUp } from "../../Features/signUp/signUp.action";
import { Alert } from "@material-ui/lab";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  username: Yup.string().required("Required"),
  password: Yup.string().required("This field is required"),
  confirmPassword: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    ),
  }),
});

export default function SignupSection() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signUpLoadingSucess } = useSelector((state) => state.SignUp);
  if (signUpLoadingSucess) {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }
  return (
    <>
      <Box mb={5} className={classes.mainContainer}>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            const payload = {
              email: values.email,
              password: values.password,
              username: values.username,
            };

            // send to server

            dispatch(addSignUp(payload));
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
              <Box pt={8} pb={1}>
                <Typography className={classes.typo} variant="body1">
                  {" "}
                  hello! let's get started
                </Typography>
              </Box>
              <Box>
                {signUpLoadingSucess && (
                  <Alert severity="success">
                    <Typography variant="body1">Sign Up success</Typography>
                  </Alert>
                )}
              </Box>

              <Box pt={5} pb={2}>
                <TextField
                  name="username"
                  variant="outlined"
                  placeholder="User Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.username}
                />
                {errors.username && touched.username ? (
                  <Typography>{errors.username}</Typography>
                ) : null}
              </Box>
              <Box pt={2} pb={3}>
                <TextField
                  variant="outlined"
                  placeholder="email"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && touched.email ? (
                  <Typography>{errors.email}</Typography>
                ) : null}
              </Box>
              <Box pt={2} pb={3}>
                <TextField
                  variant="outlined"
                  placeholder="Password"
                  name="password"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                />
                {errors.password && touched.password ? (
                  <Typography>{errors.password}</Typography>
                ) : null}
              </Box>
              <Box pt={2} pb={3}>
                <TextField
                  variant="outlined"
                  placeholder="Confrim password"
                  name="confirmPassword"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmPassword}
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <Typography>{errors.confirmPassword}</Typography>
                ) : null}
              </Box>
              <Typography
                style={{ color: "#fff", fontSize: "16px", textAlign: "center" }}
              ></Typography>
              <Box mt={3} style={{ display: "flex", justifyContent: "center" }}>
                <Buttons
                  className={classes.ButtonSignin}
                  variant="contained"
                  type="submit"
                >
                  Sign Up
                </Buttons>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
}
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: 500,
    height: 600,

    borderRadius: "8px",
    backgroundColor: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

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
}));
