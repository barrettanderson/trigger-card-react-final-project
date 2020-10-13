import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ( props ) => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/triggers">Triggers</NavLink></li>
                <li><NavLink to="/warning_signs">Warning Signs</NavLink></li>
                <li><NavLink to="/coping_skills">Coping Skills</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar