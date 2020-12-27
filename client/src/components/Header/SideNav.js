import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Divider, Toolbar } from '@material-ui/core';
import { categoryRoute, optionsRoute } from './links';
import { useHistory } from "react-router-dom";
import useStyles from './style';

export default function ({ anchor, toggleDrawer }) {
	const classes = useStyles();
	const history = useHistory();
	const NavList = () => (
		<div onClick={toggleDrawer('left', false)} className={classes.drawer}>
			<Divider />
			<List>
				{categoryRoute.map(({ icon, title,path },i) => (
					<ListItem button key={i} onClick={()=>history.push(path)}>
						<ListItemIcon>{icon}</ListItemIcon>
						<ListItemText primary={title} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{optionsRoute.map(({ icon, title,path },i) => (
					<ListItem button key={i} onClick={()=>history.push(path)}>
						<ListItemIcon>{icon}</ListItemIcon>
						<ListItemText primary={title} />
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<Drawer
			anchor={'left'}
			open={anchor['left']}
			onClose={toggleDrawer('left', false)}
		>
			<Toolbar />
			<NavList />
		</Drawer>
	);
}
