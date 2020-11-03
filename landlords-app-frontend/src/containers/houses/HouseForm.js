import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createLandlordHouse } from '../../actions/landlords'


export class HouseForm extends Component {

    componentDidMount() {

    }


    state = {
        state: "",
        city: "",
        address: "",
        number_of_tenants: ""
    }


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.state !== "" && this.state.city !== "" && this.state.address !== "" && this.state.number_of_tenants !== "") {
            const house = this.state

            this.props.createLandlordHouse(this.props.location.state.landlordId, house)


            this.setState({
                state: "",
                city: "",
                address: "",
                number_of_tenants: ""
            })

        }


    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="state">State: </label>
                        <input type="text" name="state" id="state" class="form-control" value={this.state.state} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="city">City: </label>
                        <input type="text" name="city" id="city" class="form-control" value={this.state.city} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="address">Address: </label>
                        <input type="text" name="address" id="address" class="form-control" value={this.state.address} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="number_of_tenants">Number of Tenants: </label>
                        <input type="text" name="number_of_tenants" id="number_of_tenants" class="form-control" value={this.state.number_of_tenants} onChange={this.handleChange} />
                    </div>

                    <input type="submit" value="Create House" class="btn btn-primary" />

                </form>
            </div>
        )
    }
}

export default connect(null, { createLandlordHouse })(HouseForm)
