/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import './Header.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Gear from "../../../pages/gear/Gear";
import Homepage from "../../../Homepage";
import { Button } from "../Buttons/Button";
import { Component } from 'react';

function Header() {
    return (
        <Router>
            <div css={css`
                text-align: left;
                background-color: black;
            `}>
                <ul>
                    <li>
                        <Link to="/">Logo</Link>
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