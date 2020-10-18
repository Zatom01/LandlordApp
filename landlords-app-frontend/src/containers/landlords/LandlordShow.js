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
        // const landlord = this.props.landlords.find(landlord => landlord.id === parseInt(this.props.match.params.id, 10))

        // const { name } = this.props.location.state
        // if (landlord) {
        //     this.setState({
        //         landlord,
        //         loading: false
        //     })
        // }
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
        // const name = this.props.location.state.name
        // const age = this.props.location.state.age
        // const state = this.props.location.state.state
        // const city = this.props.location.state.city
        // const number_of_houses = this.props.location.state.number_of_houses
    }



    render() {
        // if (this.state.loading) {
        //     return <p>Loading....</p>
        // }
        return (
            <div>
                <h2>Name: {this.state.landlord.name}</h2>
                <p>Age: {this.state.landlord.age}</p>
                <p>State: {this.state.landlord.state}</p>
                <p>City: {this.state.landlord.city}</p>
                <p>Number of Houses owned: {this.state.landlord.number_of_houses}</p>
                <LandlordHousesList landlord={this.componentDidMount} />
                <p>Owner id: {this.state.landlord.id}</p>

            </div>

        )
    }
}


export default LandlordShow
