import React from "react";
import "../styles/App.scss";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


//Component Imports
import LandingPage from "./LandingPage";
import NavBar from "./NavBar.js";
import CalenderPage from "./CalenderPage";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/calender/" component={CalenderPage} />
      </Switch>
    </div>
  );
}

export default App;
