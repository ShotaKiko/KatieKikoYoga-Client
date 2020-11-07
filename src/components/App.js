import React from "react";
import "../styles/App.scss";
import { Switch, Route } from "react-router-dom";

//Component Imports
import LandingPage from "./LandingPage.js";
import NavBar from "./NavBar.js";
import CalenderPage from "./CalenderPage.js";
import Classes from "./Classes.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
import ScrollToTop from "./ScrollToTop.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/calender" component={CalenderPage} />
        <Route path="/classes" component={Classes} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
