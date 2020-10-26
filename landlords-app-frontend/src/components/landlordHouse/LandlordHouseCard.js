import React, { Component } from 'react'
import { connect } from 'react-redux'

export class LandlordHouseCard extends Component {
    render() {
        return (
            <div>
                <h4>Number of Houses : {this.props.house}</h4>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        house: state.landLordsReducer.landlords,
        loading: state.landLordsReducer.loading
    }
}


export default connect(mapStateToProps)(LandlordHouseCard)
