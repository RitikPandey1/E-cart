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
 
export const navLinks = [
  {
    title: "cart",
    path: "/cart",
    icon: <ShoppingCartIcon />,
  },
  {
    title: "order",
    path: "/order",
    icon: <ListAltIcon />,
  },
  {
    title: "your account",
    path: "/account",
    icon: <AccountCircleIcon />,
  },
];