import React, { useEffect, useState } from 'react';
import GridLayout from '../GridLayout';
import { connect } from 'react-redux';
import {
	Container,
	Typography,
	TextField,
	Button,
	Grid,
} from '@material-ui/core';
import { useFormik } from 'formik';
import Spinner from '../spinner/Spinner';
import LoadingButton from '../LoadingButton';
import { getUser, updateUser } from '../../redux/Actions/userAction';
import useStyles from './style';

function MyProfile({ dispatch, user, loading, token, updating }) {
	const classes = useStyles();
	const [state, setState] = useState(true);
	useEffect(() => {
		dispatch(getUser(token));
	}, []);

	const changeState = (event) => {
		event.preventDefault();
		setState(!state);
	};
	const validate = (values) => {
		const errors = {};
		if (!values.firstName) errors.firstName = 'Required';
		if (!values.lastName) errors.lastName = 'Required';

		if (!values.email) errors.email = 'Required';
		else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = 'Invalid email address';
		}
		return errors;
	};

	const formik = useFormik({
		initialValues: {
			firstName: user.firstName,
			lastName: user.lastName,
			mobileNo: user.mobileNo,
			email: user.email,
			address: user.address,
		},
		validate,
		enableReinitialize: true,
		onSubmit: (values) => {
			dispatch(updateUser(values, token));
		},
	});
	const { errors, touched, handleSubmit, getFieldProps } = formik;

	return (
		<GridLayout>
			{loading ? (
				<Spinner />
			) : (
				<Grid container className={classes.main}>
					<Grid item md={4} sm={12}>
						<Container className={classes.intro}>
							<img
								src='../resources/userAvatar.png'
								className={classes.avatar}
							/>
						</Container>
					</Grid>
					<Grid item md={8} sm={12}>
						<div>
							<form onSubmit={handleSubmit} className={classes.root}>
								<Container className={classes.personalInfo}>
									<Typography variant='h6'>Personal Information</Typography>

									<TextField
										label='First Name'
										variant='outlined'
										id='firstName'
										{...getFieldProps('firstName')}
										error={touched.firstName && errors.firstName && true}
										helperText={touched.firstName && errors.firstName}
										disabled={state}
									/>
									<TextField
										label='Last Name'
										variant='outlined'
										id='lastName'
										{...getFieldProps('lastName')}
										error={touched.lastName && errors.lastName && true}
										helperText={touched.lastName && errors.lastName}
										disabled={state}
									/>
								</Container>
								<Container className={classes.mobileNo}>
									<Typography variant='h6'>Mobile Number</Typography>
									<TextField
										label='Mobile Number'
										variant='outlined'
										id='mobileNo'
										disabled={state}
										{...getFieldProps('mobileNo')}
										fullWidth
									/>
								</Container>
								<Container className={classes.email}>
									<Typography variant='h6'>Email Address</Typography>
									<TextField
										label='Email Address'
										variant='outlined'
										id='email'
										disabled={state}
										{...getFieldProps('email')}
										error={touched.email && errors.email && true}
										helperText={touched.email && errors.email}
										fullWidth
									/>
								</Container>
								<Container className={classes.address}>
									<Typography variant='h6'>Address</Typography>
									<TextField
										label='Address'
										variant='outlined'
										id='address'
										{...getFieldProps('address')}
										multiline
										rows={4}
										disabled={state}
									/>
								</Container>
								{state ? (
									<Button
										variant='contained'
										color='primary'
										className={classes.edit}
										onClick={changeState}
									>
										Edit
									</Button>
								) : (
									<>
										{' '}
										{updating ? (
											<LoadingButton text='save' />
										) : (
											<Button
												variant='contained'
												color='primary'
												className={classes.edit}
												type='submit'
											>
												save
											</Button>
										)}
										<a className={classes.edit} onClick={changeState} href='#'>
											back
										</a>
									</>
								)}
							</form>
						</div>
					</Grid>
				</Grid>
			)}
		</GridLayout>
	);
}

export default connect(({ auth, user }) => ({
	user: user,
	loading: user.loading,
	token: auth.token,
	updating: user.updating,
}))(MyProfile);
