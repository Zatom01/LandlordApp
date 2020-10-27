import React, { Component } from 'react'
import LandlordHousesList from '../houses/LandlordHousesList'


export class LandlordShow extends Component {

    state = {
        landlord: {
            name: "",
            age: "",
            state: "",
            city: "",
            number_of_houses: "",
            id: ""
        }
    }



    componentDidMount() {
        this.setState({
            landlord: {
                name: this.props.location.state.name,
                age: this.props.location.state.age,
                state: this.props.location.state.state,
                city: this.props.location.state.city,
                number_of_houses: this.props.location.state.number_of_houses,
                id: this.props.location.state.id
            }
        })
    }

    render() {

        return (
            <ul>
                <h3>Name: {this.state.landlord.name}</h3>
                <li>Age: {this.state.landlord.age}</li>
                <li>State: {this.state.landlord.state}</li>
                <li>City: {this.state.landlord.city}</li>
                <li>Number of Houses owned: {this.state.landlord.number_of_houses}</li>
                <li><LandlordHousesList landlord_id={this.state.landlord.id} /></li>
                <li>Owner id: {this.state.landlord.id}</li>



            </ul>

        )
    }
}


export default LandlordShow
