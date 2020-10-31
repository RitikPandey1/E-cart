import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
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

const SignInPage = () => {
  const classes = useStyle();
  return (
    <>
      <Grid container>
        <Grid item xs={1} sm={4} />
        <Grid item xs={10} sm={4}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.password) {
                errors.password = "Required";
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
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting, handleChange, errors, touched }) => (
              <Form className={classes.form}>
                <Typography variant="h5">Create your account</Typography>
                <TextField
                  fullWidth
                  className={classes.formElement}
                  label="Name"
                  id="name"
                  onChange={handleChange}
                  variant="outlined"
                  helperText={errors.name && touched.name && errors.name}
                  error={errors.name && touched.name && true}
                />
                <TextField
                  fullWidth
                  className={classes.formElement}
                  label="Email"
                  id="email"
                  onChange={handleChange}
                  variant="outlined"
                  helperText={errors.email && touched.email && errors.email}
                  error={errors.email && touched.email && true}
                />
                <TextField
                  fullWidth
                  className={classes.formElement}
                  label="Password"
                  id="password"
                  type="password"
                  onChange={handleChange}
                  variant="outlined"
                  helperText={
                    errors.password && touched.password && errors.password
                  }
                  error={errors.password && touched.password && true}
                />
                <TextField
                  fullWidth
                  className={classes.formElement}
                  label="Confirm password"
                  id="confirmPassword"
                  onChange={handleChange}
                  type="password"
                  variant="outlined"
                  helperText={
                    errors.confirmPassword &&
                    touched.confirmPassword &&
                    errors.confirmPassword
                  }
                  error={
                    errors.confirmPassword && touched.confirmPassword && true
                  }
                />
                <Button
                  fullWidth
                  variant="contained"
                  className={classes.formElement}
                  color="primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  sign in
                </Button>
                <Typography variant="subtitle1">
                  Already have an account ? <Link to="/login">login</Link>
                </Typography>
              </Form>
            )}
          </Formik>
        </Grid>
        <Grid item xs={1} sm={4} />
      </Grid>
    </>
  );
};

export default SignInPage;
