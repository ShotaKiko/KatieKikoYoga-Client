import React from "react";
import "../styles/NavBar.scss";

//Material UI Icon Imports
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";

//Material UI Component Imports
import Link from '@material-ui/core/Link';

function NavBar() {
  return (
    <div className="navContainer">
      <div className="logoDiv">
        <img
          className="logoImage"
          src="KKYLogo.png"
          alt="Logo for KatieKikoYoga"
        />
      </div>
      <div className="linksDiv">
        <Link href="#" color="inherit">
          
          About
        
        </Link>
        <Link href="#" color="inherit">
          
          Calender
        
        </Link>
        <Link href="#" color="inherit">
          
          Contact
        
        </Link>
      </div>
      <div className="socialMediasDiv">
        <InstagramIcon />
        <FacebookIcon />
        <YouTubeIcon />
      </div>
    </div>
  );
}

export default NavBar;
