import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	footer: {
		[theme.breakpoints.up('md')]: {
			width: 'calc(100% - 240px)',
			marginLeft: 240,
		},
		backgroundColor: '#2980b9',
		textAlign: 'center',
		padding: '5px',
		color: '#fff',
		bottom: 0,
	},
}));
const Footer = () => {
	const classes = useStyles();
	return (
		<Container className={classes.footer}>
			<p>Made with &#9825; , by Ritik Pandey</p>
		</Container>
	);
};

export default Footer;
