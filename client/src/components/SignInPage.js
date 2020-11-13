import { Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import MainGridLayout from "./MainGridLayout";

const useStyle = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: "50px",
  },
  formElement: { margin: theme.spacing(2, 0, 2, 0) },
}));

const SignInPage = ({ history, location }) => {
  const classes = useStyle();
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password length must be 8 or more";
    }
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Password not matched";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: async (values, { setSubmitting }) => {
      const { data } = await axios.post("/api/v1/ecartUsers/signup", {
        ...values,
      });
      if (data.status === "Success") {
        console.log(data);
        const { from } = location.state || { from: { pathname: "/" } };
        console.log(from);
        history.replace(from.pathname);
      }
    },
  });
  return (
    <MainGridLayout>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Typography variant="h5">Create your account</Typography>
        <TextField
          fullWidth
          className={classes.formElement}
          label="Name"
          id="name"
          onChange={formik.handleChange}
          variant="outlined"
          helperText={
            formik.errors.name && formik.touched.name && formik.errors.name
          }
          error={formik.errors.name && formik.touched.name && true}
        />
        <TextField
          fullWidth
          className={classes.formElement}
          label="Email"
          id="email"
          onChange={formik.handleChange}
          variant="outlined"
          helperText={
            formik.errors.email && formik.touched.email && formik.errors.email
          }
          error={formik.errors.email && formik.touched.email && true}
        />
        <TextField
          fullWidth
          className={classes.formElement}
          label="Password"
          id="password"
          type="password"
          onChange={formik.handleChange}
          variant="outlined"
          helperText={
            formik.errors.password &&
            formik.touched.password &&
            formik.errors.password
          }
          error={formik.errors.password && formik.touched.password && true}
        />
        <TextField
          fullWidth
          className={classes.formElement}
          label="Confirm password"
          id="confirmPassword"
          onChange={formik.handleChange}
          type="password"
          variant="outlined"
          helperText={
            formik.errors.confirmPassword &&
            formik.touched.confirmPassword &&
            formik.errors.confirmPassword
          }
          error={
            formik.errors.confirmPassword &&
            formik.touched.confirmPassword &&
            true
          }
        />
        <Button
          fullWidth
          variant="contained"
          className={classes.formElement}
          color="primary"
          type="submit"
          disabled={formik.isSubmitting}
        >
          sign in
        </Button>
        <Typography variant="subtitle1">
          Already have an account ? <Link to="/login">login</Link>
        </Typography>
      </form>
    </MainGridLayout>
  );
};

export default SignInPage;
