import React from 'react'

export const LandlordHouseDisplay = (props) => {
    return (
        <div>
            <ul>
                <li>House Id: {props.houseId}</li>
                <li>state: {props.state}</li>
                <li>address: {props.address}</li>
                <li>city: {props.city}</li>
                <li>number of tenants: {props.numberOfTenants}</li>
            </ul>
            <br />

        </div>
    )
}

export default LandlordHouseDisplay
