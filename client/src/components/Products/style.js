import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	box: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '10px',
		height: '130px',
	},
	productName: {
		fontSize: '1rem',
	},
	productPrice: {
		fontSize: '1.3rem',
	},
	card: {
		height: '100%',
		border: '0.5px solid #ecf0f1',
		padding: '10px',
	},
	flexBox1: {
		alignItems: 'center',
		border: '1px solid #eee',
		boxShadow: '0 10px 6px -6px #d4d4d4',
		margin: '20px 0',
		borderRadius: '5px',
		backgroundColor: '#fff',
	},
	box2: {
		padding: '10px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	grid: {
		margin: '10px 0 10px 0',
	},
	mainHeading: {
		color: '#7f8c8d',
		fontSize: '18px',
	},
}));

export default useStyles;
