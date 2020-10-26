import React from "react";
import "../styles/NavBar.scss";

//Material UI Icon Imports
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";

//Material UI Component Imports
import Link from '@material-ui/core/Link';

//react-router
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className="navContainer">
      <div className="logoDiv">
        <NavLink exact to="/">
          <img
            className="logoImage"
            src="../../KKYLogo.png"
            alt="Logo for KatieKikoYoga"
          />
        </NavLink>
      </div>
      <div className="linksDiv">
        <NavLink exact to="/" className="navStyles">
          Home
        </NavLink>
        <NavLink exact to="/calender/" className="navStyles">
          Calender
        </NavLink>
        <NavLink exact to="/classes/" className="navStyles">
          Classes
        </NavLink>
        <NavLink exact to="/contact/" className="navStyles">
          Contact
        </NavLink>
      </div>
      <div className="socialMediasDiv">
        <Link href="https://www.instagram.com/katiekikoyoga/" color="inherit">
          <InstagramIcon />
        </Link>
        <Link color="inherit" href="https://www.facebook.com/groups/369431201045267/?ref=share">
          <FacebookIcon />
        </Link>
        <Link color="inherit" href="https://www.youtube.com/">
          <YouTubeIcon />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
