import React from "react";
import "../styles/CallToAction.scss";

import { NavLink } from "react-router-dom";

function CallToAction() {
  return (
    <div className="callToActionContainer">
      <NavLink exact to="/calender" className="callToActionLinks">
        Take a look at the class schedule!
      </NavLink>

      <NavLink exact to="/classes/" className="callToActionLinks">
        Check out the class options!
      </NavLink>

      <NavLink exact to="/contact/" className="callToActionLinks">
        Contact me directly!
      </NavLink>
    </div>
  );
}

export default CallToAction;
