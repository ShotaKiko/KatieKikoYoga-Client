import React from "react";
import "../styles/App.scss";
import LandingPage from "./LandingPage";
import NavBar from "./NavBar.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
    </div>
  );
}

export default App;
