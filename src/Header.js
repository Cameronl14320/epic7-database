import react from 'react';
import './Header.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Gear from "./Gear";
import Homepage from "./Homepage";

function Header() {
    return (
        <Router>
            <div className="Header">
                <ul>
                    <li>
                        <Link to="/">Logo</Link>
                    </li>
                    <li>
                        <Link to="/Gear">Gear</Link>
                    </li>
                    <li>
                        <Link to="/Homepage">Homepage</Link>
                    </li>
                </ul>
            </div>
            <Route exact path ="/" component={Homepage} />
            <Route path ="/Gear" component={Gear} />
            <Route path ="/Homepage" component={Homepage} />
        </Router>
    );
}

export default Header;