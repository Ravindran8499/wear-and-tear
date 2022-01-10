import React from "react";
import "./homepage.styles.css";
import Directory from "../directory/directory.components";

function Homepage() {
  return (
    <div className="homepage">
      <h1>Welcome to my Homepage</h1>
      <Directory />
    </div>
  );
}

export default Homepage;
