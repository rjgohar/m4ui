import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RichTextEditor = (props) => {
  const classes = useStyles();
  const { helperText, error, formik } = props;
  const handelChange = (e) => {
    formik.setFieldValue("description", e.blocks[0].text);
    formik.setFieldValue("descriptionView", e);
  };

  return (
    <div className={classes.main}>
      <Editor
        {...props}
        wrapperClassName={classes.wrapper}
        editorClassName={classes.editor}
        toolbarClassName={classes.toolbar}
        onChange={handelChange}
      />
      <div className={clsx(classes.helperText, { [classes.error]: error })}>
        <small dangerouslySetInnerHTML={{ __html: helperText }} />
      </div>

      <small className={classes.note}>
        Note: After using any of the dropdown components, kindly click inside
        the text area at least once otherwise your changes won't update.
      </small>
    </div>
  );
};

export default RichTextEditor;
const useStyles = makeStyles((theme) => ({
  main: {
    padding: 10,
    borderRadius: 5,
    border: "2px solid  " + theme.palette.text.primary,
  },
  editor: {
    height: "300px !important",
    border: `2px solid ` + theme.palette.text.primary,
    color: theme.palette.text.primary,
    width: "100%",

    overflow: "hidden",
    padding: "5px",
    borderRadius: "20px",
    "&::-webkit-scrollbar": {
      width: 5,
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "transparent",
      borderRadius: 10,
    },
  },
  toolbar: {
    marginBottom: "0 !important ",
    border: "none",
    backgroundColor: "transparent",
    padding: "3px 0px",

    // "& .rdw-option-wrapper": {
    //   border: " 1px solid #ccc",
    // },
    // "& .rdw-dropdown-wrapper": {
    //   border: " 1px solid #ccc",
    // },
    "& .rdw-option-active": {
      background: "#e6e6e6",
      boxShadow: "none",
    },
    "& .rdw-editor-toolbar": {
      display: "none",
    },
  },
  note: {
    color: theme.palette.text.primary,
  },

  helperText: {
    padding: "2px 0 5px",
    textAlign: "left",
    color: theme.palette.text.primary,
  },

  error: {
    color: "red",
  },
}));
