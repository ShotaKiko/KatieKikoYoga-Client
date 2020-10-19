import React from "react";
import "../styles/App.scss";
import LandingPage from "./LandingPage";
import NavBar from "./NavBar.js";
import CalenderPage from "./CalenderPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <CalenderPage />
    </div>
  );
}

export default App;
