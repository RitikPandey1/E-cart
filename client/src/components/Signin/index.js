import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signInUser } from '../../redux/Actions/authAction';
import { useFormik } from 'formik';
import LoadingButton from '../LoadingButton';
import GridLayout from '../GridLayout';
import useStyles from '../Login/style';

function Signin({ dispatch, loading, isAuth, location }) {
	const classes = useStyles();
	const { from } = location.state || { from: { pathname: '/' } };
	const validate = (values) => {
		const errors = {};

		if (!values.firstName) errors.firstName = 'Required';
		if (!values.lastName) errors.lastName = 'Required';

		if (!values.email) errors.email = 'Required';
		else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = 'Invalid email address';
		}

		if (!values.password) errors.password = 'Required';
		else if (values.password.length < 8) {
			errors.password = 'Password length must be 8 or more';
		}

		if (!values.confirmPassword) errors.confirmPassword = 'Required';
		else if (values.confirmPassword !== values.password) {
			errors.confirmPassword = 'Password not matched';
		}
		return errors;
	};

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		validate,
		onSubmit: (values) => {
			dispatch(signInUser(values));
		},
	});
	const { errors, touched, handleSubmit, getFieldProps } = formik;

	const error = (name, msg) => {
		if (msg) return touched[name] && errors[name];
		return touched[name] && errors[name] && true;
	};

	return isAuth ? (
		<Redirect to={from} />
	) : (
		<GridLayout>
			<form className={classes.form} onSubmit={handleSubmit}>
				<h3>Create your account in ECART</h3>
				<TextField
					className={classes.input}
					id='firstName'
					type='text'
					variant='outlined'
					label='firstName'
					{...getFieldProps('firstName')}
					error={error('firstName')}
					helperText={error('firstName', true)}
				/>
				<TextField
					className={classes.input}
					id='lastName'
					type='text'
					variant='outlined'
					label='lastName'
					{...getFieldProps('lastName')}
					error={error('lastName')}
					helperText={error('lastName', true)}
				/>
				<TextField
					className={classes.input}
					id='email'
					type='email'
					variant='outlined'
					label='Email'
					{...getFieldProps('email')}
					error={error('email')}
					helperText={error('email', true)}
				/>
				<TextField
					className={classes.input}
					id='password'
					variant='outlined'
					label='Password'
					type='password'
					{...getFieldProps('password')}
					error={error('password')}
					helperText={error('password', true)}
				/>
				<TextField
					className={classes.input}
					id='confirmPassword'
					variant='outlined'
					label='ConfirmPassword'
					type='password'
					{...getFieldProps('confirmPassword')}
					error={error('confirmPassword')}
					helperText={error('confirmPassword', true)}
				/>
				{loading ? (
					<LoadingButton text='signin' />
				) : (
					<Button
						type='submit'
						className={classes.subBnt}
						variant='contained'
						color='primary'
					>
						sign in
					</Button>
				)}
				<p>
					Already have an account ? <Link to='/user/login'>login</Link>
				</p>
			</form>
		</GridLayout>
	);
}

export default connect(({ auth }) => ({
	isAuth: auth.isAuth,
	loading: auth.loading,
}))(Signin);
