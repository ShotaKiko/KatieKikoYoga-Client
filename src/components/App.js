import React from "react";
import "../styles/App.scss";
import { Switch, Route } from "react-router-dom";


//Component Imports
import LandingPage from "./LandingPage.js";
import NavBar from "./NavBar.js";
import CalenderPage from "./CalenderPage.js";
import Contact from "./Contact.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/calender" component={CalenderPage} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
