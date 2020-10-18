import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createLandlord } from '../../actions/landlords'

export class LandlordForm extends Component {

    state = {
        name: "",
        age: "",
        state: "",
        city: "",
        number_of_houses: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            user: this.state
        }

        this.props.createLandlord(user)

        this.setState({
            name: "",
            age: "",
            state: "",
            city: "",
            number_of_houses: ""
        })

    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)} >
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" class="form-control" value={this.state.name} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="age">Age: </label>
                        <input type="text" name="age" id="age" class="form-control" value={this.state.age} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="state">State: </label>
                        <input type="text" name="state" id="state" class="form-control" value={this.state.state} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="city">City: </label>
                        <input type="text" name="city" id="city" class="form-control" value={this.state.city} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="number_of_houses">Number of Houses: </label>
                        <input type="text" name="number_of_houses" id="number_of_houses" class="form-control" value={this.state.number_of_houses} onChange={this.handleChange} />
                    </div>

                    <input type="submit" value="Create Landlord" class="btn btn-primary" />

                </form>
            </div>
        )
    }
}

export default connect(null, { createLandlord })(LandlordForm)
