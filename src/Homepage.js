import './Homepage.css';
import './Body.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Gear from "./Gear";

// https://www.w3schools.com/TAGS/default.ASP for Tags

function Homepage() {
  return (
    <Router>
        <div className="Background">
          <Link to = "/Gear">Hello</Link>
        </div>
    </Router>
  );
}

export default Homepage;