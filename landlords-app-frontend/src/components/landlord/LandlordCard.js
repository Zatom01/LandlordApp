
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import { render } from 'react-dom';
import { connect } from 'react-redux'
import { removeLandlord } from '../../actions/landlords'

class LandlordCards extends Component {
    handleClick = () => {
        this.props.removeLandlord(this.props.landlord.id)
    }
    render() {
        return (< li >
            <NavLink to={{
                pathname: `/landlords/${this.props.landlord.id}`,
                state: {
                    name: this.props.landlord.name,
                    age: this.props.landlord.age,
                    state: this.props.landlord.state,
                    city: this.props.landlord.city,
                    number_of_houses: this.props.landlord.number_of_houses,
                    id: this.props.landlord.id
                }
            }} >
                Name: {this.props.landlord.name}

            </NavLink>
            <span>             </span>


            <button onClick={this.handleClick} class="btn btn-danger">Remove Landlord</button>
        </li >)

    }

}


export default connect(null, { removeLandlord })(LandlordCards)
