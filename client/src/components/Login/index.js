import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/Actions/authAction';
import { useFormik } from 'formik';
import LoadingButton from '../LoadingButton';
import GridLayout from '../GridLayout';
import useStyles from './style';

function Login({ dispatch, loading, isAuth, location }) {
	const classes = useStyles();
	const { from } = location.state || { from: { pathname: '/' } };
	const validate = (values) => {
		const errors = {};
		if (!values.email) errors.email = 'Email is Required';
		else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = 'Invalid email address';
		}
		if (!values.password) errors.password = 'Password is Required';

		return errors;
	};
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validate,
		onSubmit: (values) => {
			dispatch(loginUser(values));
		},
	});
	const { errors, touched, handleSubmit, getFieldProps } = formik;

	return isAuth ? (
		<Redirect to={from} />
	) : (
		<GridLayout>
			<form className={classes.form} onSubmit={handleSubmit}>
				<h3>Login to ECART</h3>
				<TextField
					className={classes.input}
					id='email'
					type='email'
					variant='outlined'
					label='Email'
					{...getFieldProps('email')}
					error={touched.email && errors.email && true}
					helperText={touched.email && errors.email}
				/>
				<TextField
					className={classes.input}
					id='password'
					variant='outlined'
					label='Password'
					type='password'
					{...getFieldProps('password')}
					error={touched.password && errors.password && true}
					helperText={touched.password && errors.password}
				/>
				{loading ? (
					<LoadingButton text='login' />
				) : (
					<Button
						type='submit'
						className={classes.subBnt}
						variant='contained'
						color='primary'
					>
						Login
					</Button>
				)}
				<p>
					Create new account <Link to='/user/signin'>Sign in</Link>
				</p>
			</form>
		</GridLayout>
	);
}

export default connect(({ auth }) => ({
	isAuth: auth.isAuth,
	loading: auth.loading,
}))(Login);
