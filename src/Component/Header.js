import React from 'react'
import {NavLink} from "react-router-dom";
import logo from "../logo.svg";
import {Nav} from "react-bootstrap";

export default class Header extends React.Component {

    render() {
        return (
            <header className="App-header">
                <div id="navbar">
                    <Nav className="navbar navbar-expand-lg navbar-dark">
                        <NavLink to="/" className="nav-item nav-link"><h1>My Router</h1></NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                                <NavLink to="/story" className="nav-item nav-link" activeClassName="selected"> My
                                    Story</NavLink>
                            </div>
                        </div>
                    </Nav>

                </div>
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
        )
    }


}