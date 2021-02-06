import React from 'react';

// ------ icons -----------
import LaptopIcon from '@material-ui/icons/Laptop';
import HeadsetIcon from '@material-ui/icons/Headset';
import SurroundSoundIcon from '@material-ui/icons/SurroundSound';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const categoryRoute = [
	{
		title: 'Mobiles',
		path: '/products/category/mobiles',
		icon: <PhoneAndroidIcon />,
	},
	{
		title: 'Laptops',
		path: '/products/category/laptops',
		icon: <LaptopIcon />,
	},
	{
		title: 'Headsets',
		path: '/products/category/headsets',
		icon: <HeadsetIcon />,
	},
	{
		title: 'Speakers',
		path: '/products/category/speakers',
		icon: <SurroundSoundIcon />,
	},
];

export const optionsRoute = [
	{ title: 'Order', path: '/my-orders', icon: <ListAltIcon /> },
	{ title: 'My profile', path: '/my-profile', icon: <AccountCircleIcon /> },
];
