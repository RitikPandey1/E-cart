import React from "react";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LaptopIcon from "@material-ui/icons/Laptop";
import HeadsetIcon from "@material-ui/icons/Headset";
import SurroundSoundIcon from "@material-ui/icons/SurroundSound";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export const categoryLinks = [
  {
    title: "Mobiles",
    path: "/products/mobiles",
    icon: <PhoneAndroidIcon />,
  },
  {
    title: "Laptops",
    path: "/products/laptops",
    icon: <LaptopIcon />,
  },
  {
    title: "Headsets",
    path: "/products/headsets",
    icon: <HeadsetIcon />,
  },
  {
    title: "Speaker",
    path: "/products/speakers",
    icon: <SurroundSoundIcon />,
  },
];

export const navLinks = [
  {
    title: "Cart",
    path: "/cart",
    icon: <ShoppingCartIcon />,
  },
  {
    title: "Order",
    path: "/order",
    icon: <ListAltIcon />,
  },
  {
    title: "Your Account",
    path: "/account",
    icon: <AccountCircleIcon />,
  },
];
