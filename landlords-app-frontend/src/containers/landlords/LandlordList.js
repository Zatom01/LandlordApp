import React, { Component } from 'react'
import LandlordCard from '../../components/landlord/LandlordCard'
import { connect } from 'react-redux'
import LandlordForm from './LandlordForm'

export class LandlordList extends Component {
    render() {

        if (this.props.loading) {
            return <div>Loading...</div>
        }

        else {

            const landlords = this.props.landlords.map((landlord, i) => {
                return <LandlordCard key={i} landlord={landlord} />
            })
            return (
                <div>
                    <h3>Here are the list of the LandLords</h3>
                    <ul>
                        {landlords}
                    </ul>
                    <br />
                    <h3>Add Landlord</h3>
                    <LandlordForm />
                </div>
            )

        }

    }
}

const mapStateToProps = state => {
    return {
        landlords: state.landLordsReducer.landlords,
        loading: state.landLordsReducer.loading
    }
}

export default connect(mapStateToProps)(LandlordList)
