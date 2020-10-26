import React, { Component } from 'react'
import LandlordHousesList from '../houses/LandlordHousesList'
import LandlordHouseCard from '../../components/landlordHouse/LandlordHouseCard'




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
            <div>
                <h2>Name: {this.state.landlord.name}</h2>
                <p>Age: {this.state.landlord.age}</p>
                <p>State: {this.state.landlord.state}</p>
                <p>City: {this.state.landlord.city}</p>
                <p>Number of Houses owned: {this.state.landlord.number_of_houses}</p>
                <LandlordHousesList landlord_id={this.state.landlord.id} />
                <p>Owner id: {this.state.landlord.id}</p>
                {/* <LandlordHouseCard /> */}


            </div>

        )
    }
}


export default LandlordShow
