import React, { Component } from 'react'
import landlordHouses from '../../actions/landlordHouses'
// import LandlordCard from '../../components/landlord/LandlordCard'
// import { connect } from 'react-redux'

export class LandlordHousesList extends Component {

    render() {
        return (
            <div>
                <p>These are the houses for this particular landlord</p>
                <landlordHouses landlord={this.props.landlord} />
            </div>
        )
    }
}

export default LandlordHousesList
