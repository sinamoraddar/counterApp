import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => (
    <div>
        <NavLink exact to="/">Counter</NavLink>
        <NavLink to="/settings">Settings</NavLink>
    </div>
);

export default NavBar;