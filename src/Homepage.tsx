import './Homepage.css';
import './Body.css';

import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";

// https://www.w3schools.com/TAGS/default.ASP for Tags

function Homepage() {
  return (
    <Router>
        <div className="Background">
          Hey, this is the Homepage
        </div>
    </Router>
  );
}

export default Homepage;
