import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
	(theme) => ({
		infoSection: {
			marginTop: '50px',
		},
		info: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		infoBox: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			backgroundColor: '#fff',
			padding: '20px 40px',
			boxShadow: ' 0px 6px 15px rgba(0, 0, 0, 0.25)',
			borderRadius: '15px',
			color: '#001893',
		},
		midSection: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: '50px',
			backgroundColor: '#fff',
			padding: '20px ',
		},
		badge: {
			background:
				'linear-gradient(180deg, rgba(243, 156, 18, 0.6) 0%, #F39C12 100%)',
			color: '#fff',
			boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.25)',
			padding: '15px 40px',
			borderRadius: '50px',
			fontSize: '22px',
		},
		shopCategory: {
			margin: '50px 0',
		},
		category: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		shopIcon: {
			color: '#FAA720',
			fontSize: '50px',
		},
		shopCatg: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			padding: '10px 0',
			textDecoration: 'none',
			color: 'black',
			backgroundColor: '#fff',
			'&:hover': {
				boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.25)',
			},
		},
	}),
	{ index: 1 }
);

export default useStyles;
