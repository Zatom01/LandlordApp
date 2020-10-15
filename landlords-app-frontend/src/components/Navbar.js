import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <nav>
                <NavLink to="/">Home</NavLink>
                <ul>
                    <li><NavLink to="/landlords">Landlords</NavLink></li>
                    <li><NavLink to="/landlords/new">Create Landlord</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar
