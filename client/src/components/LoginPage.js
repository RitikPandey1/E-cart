import { Button,  TextField, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import MainGridLayout from "./MainGridLayout";
import axios from "axios";

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

const LoginPage = ({  history ,location }) => {
  const classes = useStyle();
   return (
    <MainGridLayout>
      <Formik
        initialValues={{ email: "", password: "" }}
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
          } else if (values.password.length < 8) {
            errors.password = "Password length must be 8 or more";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const logIn = async () => {
            try {
              const response = await axios({
                method: "POST",
                url: "/api/v1/ecartUsers/login",
                data: {
                  ...values,
                },
                validateStatus: () => true,
              });
              console.log(response);
              if (response.data.status === "Success") {
                setSubmitting(false);
                const { from } = location.state || { from: { pathname: "/" } };
                history.replace(from);
              }
            } catch (err) {
              console.log(err.message);
            }
            //console.log(response);
            setSubmitting(false);
          };
          logIn();
        }}
      >
        {({ isSubmitting, errors, handleChange, touched }) => (
          <Form className={classes.form}>
            <Typography variant="h5"> Login to ECART</Typography>
            <TextField
              fullWidth
              className={classes.formElement}
              label="Email"
              id="email"
              type="email"
              variant="outlined"
              onChange={handleChange}
              helperText={errors.email && touched.email && errors.email}
              error={errors.email && touched.email && true}
            />
            <TextField
              fullWidth
              className={classes.formElement}
              label="Password"
              id="password"
              type="password"
              variant="outlined"
              onChange={handleChange}
              helperText={
                errors.password && touched.password && errors.password
              }
              error={errors.password && touched.password && true}
            />
            <Button
              fullWidth
              variant="contained"
              type="submit"
              className={classes.formElement}
              color="primary"
              disabled={isSubmitting}
            >
              login
            </Button>
            <Typography variant="subtitle1">
              Create new account <Link to="/signin">Sign in</Link>
            </Typography>
          </Form>
        )}
      </Formik>
    </MainGridLayout>
  );
};

export default LoginPage;
