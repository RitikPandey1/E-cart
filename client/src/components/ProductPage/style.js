import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	main: {
		backgroundColor: '#fff',
		padding: '20px',
	},
	button: {
		margin: '10px auto 10px auto',
	},
	buttonArea: {
		display: 'flex',
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
});

export default useStyles;
