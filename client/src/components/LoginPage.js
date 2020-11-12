import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import ErrorPanel from "./Error/ErrorPanel";
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
  return errors;
};

const LoginPage = ({ history, location }) => {
  const classes = useStyle();
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validate,
    onSubmit: async (values, { setSubmitting }) => {
      const response = await axios({
        method: "POST",
        url: "/api/v1/ecartUsers/login",
        data: {
          ...values,
        },
        validateStatus: (status) => status<500,
      });

      console.log(response);

      if (response.data.status === "Success") {
        const { from } = location.state || { from: { pathname: "/" } };
        history.replace(from);
      }
      if (response.status === 401) {
        setError(true);
        setErrorMsg(response.data.message);
      }
      setSubmitting(false);
    },
  });

  return (
    <MainGridLayout>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Typography variant="h5"> Login to ECART</Typography>
        <ErrorPanel error={error} message={errorMsg} />
        <TextField
          fullWidth
          className={classes.formElement}
          label="Email"
          id="email"
          type="email"
          variant="outlined"
          onChange={formik.handleChange}
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
          variant="outlined"
          onChange={formik.handleChange}
          helperText={
            formik.errors.password &&
            formik.touched.password &&
            formik.errors.password
          }
          error={formik.errors.password && formik.touched.password && true}
        />
        <Button
          fullWidth
          variant="contained"
          type="submit"
          className={classes.formElement}
          color="primary"
          disabled={formik.isSubmitting}
        >
          login
        </Button>
        <Typography variant="subtitle1">
          Create new account <Link to="/signin">Sign in</Link>
        </Typography>
      </form>
    </MainGridLayout>
  );
};

export default LoginPage;
