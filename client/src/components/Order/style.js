import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	orderItem: {
		backgroundColor: '#fff',
		padding: '10px',
		boxShadow: '0 10px 6px -6px #d4d4d4',
		marginTop: '15px',
	},
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
	orderDate: {
		color: '#95a5a6',
	},
	review: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '10px 0 10px 0',
	},

}));

export default useStyles;
