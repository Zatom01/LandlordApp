import React, { Component } from 'react'


export class LandlordHousesList extends Component {
    constructor() {
        super();

    }

    render() {

        const landlord_id = this.props.landlord_id
        return (
            <div>
                <p>These are the houses for this particular landlord</p>


            </div>
        )

    }
}



export default (LandlordHousesList)
