import React, { useState } from "react";
import "../styles/NavBar.scss";

//Material UI Icon Imports
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

//Material UI Component Imports
import Link from "@material-ui/core/Link";

//react-router
import { NavLink } from "react-router-dom";

//Slide animation
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

function NavBar() {
  const [open, setOpen] = useState(false);

  const openStyle = {
    display: "initial",
  };

  const closedStyle = {
    display: "none",
  };

  const children = (
    <div className="columnOfLinks">
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
  );

  return (
    <section className="nav">
      <div className="mobileNavContainer">
        <div className="staticMenu">
          <div className="logoDiv">
            <NavLink exact to="/">
              <img
                className="logoImage"
                src="../../KKYLogo.png"
                alt="Logo for KatieKikoYoga"
              />
            </NavLink>
          </div>
          <div className="hamMenu">
            <MenuIcon
              fontSize={"large"}
              onClick={() => setOpen(!open)}
              style={open ? closedStyle : openStyle}
            />
            <CloseIcon
              fontSize={"large"}
              onClick={() => setOpen(!open)}
              style={open ? openStyle : closedStyle}
            />
            Menu
          </div>
        </div>
        <SlideDown className={"my-dropdown-slidedown"}>
          {open ? children : null}
        </SlideDown>
      </div>

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
          <Link
            color="inherit"
            href="https://www.facebook.com/groups/369431201045267/?ref=share"
          >
            <FacebookIcon />
          </Link>
          <Link
            color="inherit"
            href="https://www.youtube.com/channel/UCUMdCeRxgOouAB3uES3AZqA/featured"
          >
            <YouTubeIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NavBar;
