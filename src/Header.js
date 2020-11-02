import react from 'react';
import './Header.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Gear from "./Gear";
import Homepage from "./Homepage";

function Header() {
    return (
        <Router>
            <div className="static-header">
                <ul>
                    <li>
                        <Link to="/" className="header-logo">Logo</Link>
                    </li>
                    <li>
                        <Link to="/Gear">Gear</Link>
                    </li>
                </ul>
            </div>
        
            <Route exact path ="/" component={Homepage} />
            <Route path ="/Gear" component={Gear} />
        </Router>
    );
}

export default Header;