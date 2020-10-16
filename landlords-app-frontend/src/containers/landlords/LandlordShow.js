import React, { Component } from 'react'

export class LandlordShow extends Component {
    render() {
        return (

            <div>
                <h3>Here is the specific landlord you requested</h3>
                <h3>{this.state.landlord.name}</h3>

            </div>
        )
    }
}

export default LandlordShow
