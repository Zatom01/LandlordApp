import React, { Component } from 'react'
// import LandlordCard from '../../components/landlord/LandlordCard'
import { connect } from 'react-redux'

export class LandlordHousesList extends Component {


    render() {

        return (
            <div>
                <p>These are the houses for this particular landlord</p>

                {this.props.houses}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        houses: state.landLordsReducer.landlords.houses,

    }
}


export default connect(mapStateToProps)(LandlordHousesList)
