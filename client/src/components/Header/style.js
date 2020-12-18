import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	Drawer: {
		width: '240px',
	},
	linkText: {
		textDecoration: `none`,
		textTransform: `uppercase`,
		color: `black`,
	},
	menuButton: {
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
		color: '#fff',
	},
	icon: {
		fontFamily: 'Roboto Slab',
		padding: '15px',
		color: '#fff',
	},
	header: {},
	wrapper: {
		position: 'absolute',
		right: 0,
	},
}));

export default useStyles;