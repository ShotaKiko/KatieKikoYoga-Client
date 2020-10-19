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
            src="KKYLogo.png"
            alt="Logo for KatieKikoYoga"
          />
        </NavLink>
      </div>
      <div className="linksDiv">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/calender/">
          Calender
        </NavLink>
      </div>
      <div className="socialMediasDiv">
        <Link href="https://www.instagram.com/katiekikoyoga/" color='inherit' >
          <InstagramIcon />
        </Link>
        <Link color='inherit' href='https://www.facebook.com/'>
          <FacebookIcon />
        </Link>
        <Link color='inherit' href='https://www.youtube.com/'>
          <YouTubeIcon />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
