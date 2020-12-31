import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
	(theme) => ({
		form: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',

			width: '100%',
			[theme.breakpoints.up('md')]: {
				width: '60%',
			},
			margin: 'auto',
			// border: '0.5px solid #bdc3c7',
			borderRadius: '20px',
			padding: '10px 0',
			backgroundColor: '#fff',
			boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
		},
		input: {
			margin: '20px 0',
		},
		subBnt: {
			margin: '10px 0',
		},
	}),
	{ index: 1 }
);

export default useStyles;
