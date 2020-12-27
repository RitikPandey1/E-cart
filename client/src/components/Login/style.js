import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	form: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',

		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '60%',
		},
		margin: 'auto',
		border: '1px solid #bdc3c7',
		borderRadius: '20px',
		padding: '10px 0',
	},
	input: {
		margin: '20px 0',
	},
	subBnt: {
		margin: '10px 0',
	},
}));

export default useStyles;
