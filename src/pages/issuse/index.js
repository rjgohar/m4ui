import { Box, makeStyles, TextField, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import React from "react";
import RichTextEditor from "../../components/DescriptionBox";
import Button from "../../units/Button";
import * as Yup from "yup";
import { useEffect } from "react";
import { addIssue } from "../../Features/github/github.action";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";
import { useNavigate } from "react-router-dom";

const issueSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

const TITLE_LIMIT = 50;

export default function Issue() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { githubLoadingSucess } = useSelector((state) => state.GithubSlicer);
  if (githubLoadingSucess) {
    setTimeout(() => {
      navigate("/community");
    }, 2000);
  }
  // Formik Handler
  const initialValues = {
    title: "",
    description: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: issueSchema,
    onSubmit: (values) => {
      const payload = {
        owner: "KevinHermansDZTT",
        repo: "test_issues",
        title: values.title,
        body: values.description,
      };

      dispatch(addIssue(payload));
    },
  });

  return (
    <div className={classes.main}>
      {" "}
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.inner1}>
          <Typography variant="h2" className="typo">
            {" "}
            create a new issue
          </Typography>
        </div>
        <Box>
          {githubLoadingSucess && (
            <Alert severity="success">
              <Typography variant="body1">Created successfully</Typography>
            </Alert>
          )}
        </Box>
        <Box className={classes.inner2}>
          <TextField
            placeholder="Title"
            label="Title"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
            helperText={
              (formik.touched.title && formik.errors.title) || (
                <Typography variant="h4">
                  {formik.values.title.length}/{TITLE_LIMIT}
                </Typography>
              )
            }
            error={formik.touched.title && Boolean(formik.errors.title)}
          />
        </Box>
        <Box className={classes.inner2}>
          <RichTextEditor
            onChange={formik.handleChange}
            value={formik.values.description}
            formik={formik}
            name="description"
            helperText={
              (formik.touched.description && formik.errors.description) ||
              `&nbsp;`
            }
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
          />
        </Box>
        <Box className={classes.addIssue}>
          <Button variant="contained" type="submit" onClick={formik.submitForm}>
            Add Issues
          </Button>
        </Box>
      </form>
    </div>
  );
}

export const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    gap: 40,
  },
  inner1: {
    paddingTop: 90,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .typo": {
      fontSize: 50,
      fontWeight: 800,
      textTransform: "capitalize",
      color: theme.palette.text.primary,
    },
  },

  inner2: {
    width: "70%",
    margin: "auto",
    padding: "10px 0px",
  },
  addIssue: {
    margin: "auto",
    width: "70%",
    padding: "10px",
  },
}));
