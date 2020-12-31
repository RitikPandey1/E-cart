import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
	(theme) => ({
		drawer: {
			width: '250px',
		},
		header: {
			display: 'flex',
			flexDirection: 'column',
			[theme.breakpoints.up('sm')]: {
				flexDirection: 'row',
				alignItems: 'center',
			},
			justifyContent: 'space-between',
			alignItems: 'flex-start',
			backgroundColor: '#fff',
			color: '#4E5DAA',
			padding: '10px',
		},
		themeColor: {
			color: '#4E5DAA',
		},
		sidenav: {
			[theme.breakpoints.up('md')]: {
				display: 'none',
			},
			display: 'inline',
		},
		topnav: {
			[theme.breakpoints.up('md')]: {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			},
			display: 'none',
			'& button': {
				marginRight: '10px',
			},
		},

		center: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			padding: '0 15px',
		},
		icon: {
			color: '#4E5DAA',
			fontSize: '20px',
			fontFamily: 'Roboto Slab',
			fontWeight: 800,
		},
		searchBox: {
			display: 'flex',
			justifyContent: 'center',
			padding: '5px 0',
			width: '100%',
		},
		srearchField: {
			width: '100%',
		},
		srcbtn: {
			marginLeft: '-10px',
			backgroundColor: '#3f51b5',
		},
	}),
	{ index: 1 }
);

export default useStyles;
