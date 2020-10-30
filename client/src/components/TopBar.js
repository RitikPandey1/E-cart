import React, { useState } from "react";
import { AppBar, Hidden } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useHistory, useRouteMatch } from "react-router-dom";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LaptopIcon from "@material-ui/icons/Laptop";
import HeadsetIcon from "@material-ui/icons/Headset";
import SurroundSoundIcon from "@material-ui/icons/SurroundSound";
import SideBar from "./SideBar";

const TopBar = () => {
  const [value, setValue] = useState(0);
  const history = useHistory();
  const { url } = useRouteMatch();
  console.log(url);

  const navLinks = [
    {
      title: "mobiles",
      path: "/home/products/mobiles",
      icon: <PhoneAndroidIcon />,
    },
    { title: "laptops", path: "/home/products/laptops", icon: <LaptopIcon /> },
    {
      title: "headsets",
      path: "/home/products/headsets",
      icon: <HeadsetIcon />,
    },
    {
      title: "speaker",
      path: "/home/products/speakers",
      icon: <SurroundSoundIcon />,
    },
  ];

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
          <Tab
            label="moblies"
            icon={<PhoneAndroidIcon />}
            onClick={() => history.push(`${url}/products/mobiles`)}
          />
          <Tab
            label="laptops"
            icon={<LaptopIcon />}
            onClick={() => history.push(`${url}/products/laptops`)}
          />
          <Tab
            label="headsets"
            icon={<HeadsetIcon />}
            onClick={() => history.push(`${url}/products/headsets`)}
          />
          <Tab
            label="speakers"
            icon={<SurroundSoundIcon />}
            onClick={() => history.push(`${url}/products/speakers`)}
          />
        </Tabs>
      </Hidden>
      <Hidden mdUp>
        <SideBar navLinks={navLinks} />
      </Hidden>
    </AppBar>
  );
};
export default TopBar;
