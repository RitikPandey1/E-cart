import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
	mainText: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '25px',
		marginTop: '60px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '16px',
		},
	},

	mainImg: {
		padding: '50px',
		marginTop: '60px',

		'& img': {
			width: '100%',
			height: '100%',
		},
		[theme.breakpoints.down('sm')]: {
			padding: 0,
			height: '50vh',
		},
	},
	info: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '20px 5px',
		color: '#2E409F',

		'& h3': {
			margin: '5px 0',
		},
		'& h2': {
			margin: '5px 0',
			color: '#001893',
		},
		[theme.breakpoints.down('sm')]: {
			'& img': {
				width: '40px',
				height: '40px',
			},
		},
	},
	shopIcon: {
		fontSize: '60px',
		color: '#FAA720',
	},
	shopCatg: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '10px 0',
		textDecoration: 'none',
		color: 'black',
		'&:hover': {
			backgroundColor: '#f1f2f6',
		},
	},
	topCatg: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f1f2f6',
		marginTop: '50px',
	},
	catg: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: '250px',
		height: '50px',
		borderRadius: '25px',
		backgroundColor: '#FAA720',
		color: '#fff',
		fontSize: '22px',
	},
}));


export default useStyles;
