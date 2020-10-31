import React, { useState, useEffect } from "react";
import { AppBar, Hidden } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useHistory } from "react-router-dom";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LaptopIcon from "@material-ui/icons/Laptop";
import HeadsetIcon from "@material-ui/icons/Headset";
import SurroundSoundIcon from "@material-ui/icons/SurroundSound";
import SideBar from "./SideBar";

const TopBar = () => {
  const [value, setValue] = useState(0);
  const history = useHistory();
  const navLinks = [
    {
      title: "mobiles",
      path: "/products/mobiles",
      icon: <PhoneAndroidIcon />,
    },
    {
      title: "laptops",
      path: "/products/laptops",
      icon: <LaptopIcon />,
    },
    {
      title: "headsets",
      path: "/products/headsets",
      icon: <HeadsetIcon />,
    },
    {
      title: "speaker",
      path: "/products/speakers",
      icon: <SurroundSoundIcon />,
    },
  ];

  useEffect(() => {
    const path = history.location.pathname;
    navLinks.forEach((link,i) => {
      if (path === link.path) setValue(i);
    });
  },[navLinks,history]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppBar position="static" color="default">
      <Hidden smDown>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          {navLinks.map((link,i) => (
            <Tab
              label={link.title}
              icon={link.icon}
              onClick={() => history.push(`${link.path}`)}
              key={i}
            />
          ))}
        </Tabs>
      </Hidden>
      <Hidden mdUp>
        <SideBar navLinks={navLinks} />
      </Hidden>
    </AppBar>
  );
};
export default TopBar;
