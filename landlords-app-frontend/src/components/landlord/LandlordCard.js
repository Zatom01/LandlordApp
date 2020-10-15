import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({ landlord: { name, id } }) => <li> <NavLink to={`/landlords/${id}`}>{name}</NavLink></li>;
