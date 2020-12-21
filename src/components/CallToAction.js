import React from "react";
import { NavLink } from "react-router-dom";

function CallToAction() {
  return (
    <div className="callToActionContainer">
      <NavLink exact to="/calender">
        Take a look at the class Schedule!
      </NavLink>

      <NavLink exact to="/classes/">
        Take a look at the class options!
      </NavLink>

      <NavLink exact to="/contact/">
        Contact me directly!
      </NavLink>
    </div>
  );
}

export default CallToAction;
