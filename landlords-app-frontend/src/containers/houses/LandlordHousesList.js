import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchlandlordhouses } from '../../actions/landlords'
import { LandlordHouseDisplay } from '../../components/landlord/LandlordHouseDisplay'

export class LandlordHousesList extends Component {


    handleClick = event => {
        event.preventDefault()

        this.props.fetchlandlordhouses(this.props.landlord_id)
    }
    render() {


        const houses = this.props.houses.map((house) => {
            return <LandlordHouseDisplay address={house.address} city={house.city} state={house.state} numberOfTenants={house.number_of_tenants} houseId={house.id} />

        })


        console.log(this.props.houses)

        const landlord_id = this.props.landlord_id
        return (
            <div>
                <p>These are the houses for this particular landlord</p>
                <button onClick={this.handleClick} > Houses </button>
                {houses}


            </div >
        )

    }
}

const mapStateToProps = state => {
    return {
        houses: state.landlords.houses
    }

}


export default connect(mapStateToProps, { fetchlandlordhouses })(LandlordHousesList)
