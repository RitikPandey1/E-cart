import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	form: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '70%',
		margin: '50px auto 0 auto',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
	},
	formElement: { margin: theme.spacing(2, 0, 2, 0) },
}));

export default useStyles;