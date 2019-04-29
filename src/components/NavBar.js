import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => (
    <div >


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <span className="navbar-brand" href="#">
                    <NavLink className="navlink"  activeClassName="activeNav" exact to="/">Counter</NavLink>
                </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <span className="navbar-brand">
                        <NavLink className="navlink" activeClassName="activeNav"  to="/settings">Settings</NavLink>
                    </span>
                </div>
            </div>
        </nav>
    </div>
);

export default NavBar;