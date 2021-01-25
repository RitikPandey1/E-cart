import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
	{
		main: {
			backgroundColor: '#fff',
		},
		root: {
			'& .MuiTextField-root': {
				margin: '10px',
			},
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			padding: '10px',
		},

		personalInfo: {
			display: 'flex',
			flexDirection: 'column',
			marginBottom: '20px',
		},
		mobileNo: {
			marginBottom: '20px',
		},
		email: {
			marginBottom: '20px',
		},
		address: {
			marginBottom: '20px',
		},
		avatar: {
			width: '100%',

			borderRadius: '50px',
		},
		intro: {
			padding: '10px',
		},
		edit: {
			marginTop: '10px',
		},
	},
	{ index: 1 }
);

export default useStyles;
