import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';



export class Navbar extends Component {

    render() {

        let link;
        // this.props.landlord ?
        return (
            <nav>
                <NavLink to="/">Home</NavLink>
                <ul>
                    <li><NavLink to="/landlords">Landlords</NavLink></li>
                    <li><NavLink to="/landlords/new">Create Landlord</NavLink></li>
                    {/* <li><NavLink to="/landlords/:id/houses/new">Create House</NavLink></li> */}

                </ul>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        landlord: state.landlords.landlords
    }
}

export default connect(mapStateToProps)(Navbar)
