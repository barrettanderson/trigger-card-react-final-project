import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ( props ) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <NavLink className="navbar-brand" to="/">Trigger Card Home</NavLink>
                </div>
                <ul className="nav navbar-nav">
                    <li><NavLink to="/triggers">Triggers</NavLink></li>
                    <li><NavLink to="/warning_signs">Warning Signs</NavLink></li>
                    <li><NavLink to="coping_skills">Coping Skills</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar