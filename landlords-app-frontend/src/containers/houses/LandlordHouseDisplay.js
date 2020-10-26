import React from 'react'

export const LandlordHouseDisplay = (props) => {
    return (
        <div>
            <p>state: {props.state}</p>
            <p>address: {props.address}</p>
            <p>city: {props.city}</p>
            <p>number of tenants: {props.numberOfTenants}</p>


        </div>
    )
}

export default LandlordHouseDisplay
