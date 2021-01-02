import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
	{
		main: {
			backgroundColor: '#fff',
			padding: '20px',
		},
		button: {
			margin: '10px auto 10px auto',
		},
		buttonArea: {
			display: 'flex',
			marginTop: '50px',
		},
		imageBox: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		avatar: {
			backgroundColor: 'green',
		},
		review: {
			display: 'flex',
			flexDirection: 'column',
			padding: '10px',
			justifyContent: 'flex-start',
			marginTop: '5px',
		},
		paper: {
			padding: '15px',
		},
		price: {
			fontSize: '1.3rem',
		},
		name: {
			fontSize: '1.5rem',
		},
		description: {
			fontSize: '1 rem',
		},
	},
	{ index: 1 }
);

export default useStyles;
