import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import '../css/NavBar.css';

export default class Navbarcomponent extends Component {
    click = false;

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleClick = () => {
        this.click = true;
    }

    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar">
                    <NavLink
                        exact to="/" CMS="active"
                        className="end-logo"
                        onClick={this.handleClick}>
                        Claim Management System
                    </NavLink>
                    <ul className={this.click ? "nav-menu active" : "nav-menu"}>

                        <NavLink
                            exact to="/" HomeComponent="active"
                            className="nav-links"
                            onClick={this.handleClick}>
                            Home
                        </NavLink>
                        <NavLink
                            exact to="/addmember" activeClassName="active"
                            className="nav-links"
                            onClick={this.handleClick}>
                            Member Registration
                        </NavLink>
                        <NavLink
                            exact to="/MemberLogin" activeClassName="active"
                            className="nav-links"
                            onClick={this.handleClick}>
                            Member Login
                        </NavLink>
                        <NavLink
                            exact to="/AdminLogin" activeClassName="active"
                            className="nav-links"
                            onClick={this.handleClick}>
                            Admin Login
                        </NavLink>
                    </ul>
                </nav>
               
            </div>
        )
    }
}