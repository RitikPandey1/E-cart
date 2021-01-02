import React from 'react';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LaptopIcon from '@material-ui/icons/Laptop';
import HeadsetIcon from '@material-ui/icons/Headset';
import SurroundSoundIcon from '@material-ui/icons/SurroundSound';
import PublicIcon from '@material-ui/icons/Public';
import PersonIcon from '@material-ui/icons/Person';
import StoreIcon from '@material-ui/icons/Store';
import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './style';

function Home() {
	const classes = useStyles();

	return (
		<Grid container>
			<Grid item xs={12}>
				<img
					src='./resources/background.svg'
					style={{ width: '100%', height: '100%' }}
				/>
			</Grid>
			<Grid container item xs={12} spacing={3} className={classes.infoSection}>
				<Grid item xs={12} sm={4} className={classes.info}>
					<div className={classes.infoBox}>
						<PublicIcon className={classes.infoIcons} />
						<Typography variant='subtitle1'>countries</Typography>
						<Typography variant='subtitle1'>12 +</Typography>
					</div>
				</Grid>
				<Grid item xs={12} sm={4} className={classes.info}>
					<div className={classes.infoBox}>
						<PersonIcon className={classes.infoIcons} />
						<Typography variant='subtitle1'>customers</Typography>
						<Typography variant='subtitle1'>15000 +</Typography>
					</div>
				</Grid>
				<Grid item xs={12} sm={4} className={classes.info}>
					<div className={classes.infoBox}>
						<StoreIcon className={classes.infoIcons} />
						<Typography variant='subtitle1'>stores</Typography>
						<Typography variant='subtitle1'>250 +</Typography>
					</div>
				</Grid>
			</Grid>
			<Grid item xs={12} className={classes.midSection}>
				<div className={classes.badge}>Shop By Category</div>
			</Grid>
			<Grid container item xs={12} spacing={3} className={classes.shopCategory}>
				<Grid item xs={6} sm={3}>
					{' '}
					<Link to='/products/category/mobiles' className={classes.shopCatg}>
						<PhoneAndroidIcon className={classes.shopIcon} />
						<Typography variant='subtitle2'> Mobiles</Typography>
					</Link>
				</Grid>

				<Grid item xs={6} sm={3}>
					<Link to='/products/category/laptops' className={classes.shopCatg}>
						<LaptopIcon className={classes.shopIcon} />
						<Typography variant='subtitle2'>Laptops</Typography>
					</Link>
				</Grid>

				<Grid item xs={6} sm={3}>
					<Link to='/products/category/headsets' className={classes.shopCatg}>
						{' '}
						<HeadsetIcon className={classes.shopIcon} />
						<Typography variant='subtitle2'>Headsets</Typography>
					</Link>
				</Grid>

				<Grid item xs={6} sm={3}>
					<Link to='/products/category/speakers' className={classes.shopCatg}>
						<SurroundSoundIcon className={classes.shopIcon} />
						<Typography variant='subtitle2'>Speakers</Typography>
					</Link>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Home;
