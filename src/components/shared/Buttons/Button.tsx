/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Component, ComponentClass } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Button extends Component {
    description : string;
    path : string;
    constructor(description : string, path : string) {
        super(description);
        this.description = description;
        this.path = path;
    }

    render() {
        return (
            <Router>
            <div css={css`
                text-align: left;
                background-color: black;
            `}>
                <Link to={this.path}> {this.description}</Link>
            </div>
        
            <Route exact path = {this.path} />
        </Router>
        );
    }
}