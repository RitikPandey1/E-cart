import { Button,  TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useFormik} from "formik";
import { Alert, AlertTitle } from "@material-ui/lab";

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


const LoginPage = ({ history, location }) => {
  const [authError, setAuthError] = useState(false);
  const [errorMsg,setErrorMsg] = useState("");
  const classes = useStyle();
   const validate = (values) => {
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
   };
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validate,
    onSubmit: async(values, { setSubmitting }) => {
             try {
               const response = await axios({
                 method: "POST",
                 url: "/api/v1/ecartUser/login",
                 data: {
                   ...values,
                 },
                 validateStatus: (status) => status===401,
               });
               console.log(response);
               if (response.data.status === "Success") {
                 const { from } = location.state || { from: { pathname: "/" } };
                 history.replace(from);
               }
               if (response.status === 401) {
                 setErrorMsg(response.data.message);
                 setAuthError(true);
               }
             } catch (err) {
               console.log(err.message);
               history.replace("/error");
             }
             setSubmitting(false);
           }
     
  });
 

   return (
     <MainGridLayout>
          <form className={classes.form} onSubmit={formik.handleSubmit}>
             <Typography variant="h5"> Login to ECART</Typography>
             {authError && (
               <Alert severity="error">
                 <AlertTitle>{errorMsg}</AlertTitle>
               </Alert>
             )}
             <TextField
               fullWidth
               className={classes.formElement}
               label="Email"
               id="email"
               type="email"
               variant="outlined"
               onChange={formik.handleChange}
               helperText={formik.errors.email && formik.touched.email && formik.errors.email}
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
                 formik.errors.password && formik.touched.password && formik.errors.password
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
