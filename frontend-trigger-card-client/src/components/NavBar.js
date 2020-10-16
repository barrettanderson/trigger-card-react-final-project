import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ( props ) => {
    return (
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <NavLink class="navbar-brand" to="/">Trigger Card Home</NavLink>
                </div>
                <ul class="nav navbar-nav">
                    <li><NavLink to="/triggers">Triggers</NavLink></li>
                    <li><NavLink to="/warning_signs">Warning Signs</NavLink></li>
                    <li><NavLink to="coping_skills">Coping Skills</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar