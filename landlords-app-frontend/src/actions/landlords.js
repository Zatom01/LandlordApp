
const BASE_URL = 'http://localhost:3001'

export const fetchLandlords = () => {
    //thunk requires a function to be returned

    return (dispatch) => {

        fetch(BASE_URL + '/users')
            .then(resp => resp.json())
            .then(landlords => dispatch({ type: "LOAD_LANDLORDS", landlords }))
    }
}

export const fetchlandlordhouses = (landlord_id) => {
    console.log(landlord_id)
    return (dispatch) => {

        fetch(BASE_URL + '/users/' + landlord_id + '/houses')
            .then(resp => resp.json())
            .then(houses => dispatch({ type: "LOAD_HOUSES", houses }))
    }
}

const addLandlord = (landlord) => {
    return {
        type: "ADD_LANDLORD",
        landlord
    }
}



export const createLandlord = (landlordData) => {
    return (dispatch) => {
        fetch('http://localhost:3001/users', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(landlordData)
        })
            .then(resp => resp.json())
            .then(landlord => {
                dispatch(addLandlord(landlord))
            })
    }
}


const deleteLandlord = (id) => {
    return {
        type: "DELETE_LANDLORD",
        id
    }
}

export const removeLandlord = id => {
    return (dispatch) => {
        return fetch(`http://localhost:3001/users/${id}`, {
            method: 'DELETE',
        })
            .then(resp => dispatch(deleteLandlord(id)))
    }
}

export function reset_houses() {
    return {
        type: "RESET_HOUSES"
    }
}
