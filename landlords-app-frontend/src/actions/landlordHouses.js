
const LOADING = { type: "LOADING" };
const BASE_URL = 'http://localhost:3001/users'

export const fetchLandlordHouses = (props) => {
    //thunk requires a function to be returned

    return (dispatch) => {
        dispatch(LOADING)


        fetch(BASE_URL + `${props.id}/houses`)
            .then(resp => resp.json())
            .then(landlordHouses => dispatch({ type: "LOAD_LANDLORDHOUSES", landlordHouses }))

    }
}

// const addLandlord = (landlord) => {
//     return {
//         type: "ADD_LANDLORD",
//         landlord
//     }
// }



// export const createLandlord = (landlordData) => {
//     return (dispatch) => {
//         fetch('http://localhost:3001/users', {
//             method: "POST",
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(landlordData)
//         })
//             .then(resp => resp.json())
//             .then(landlord => {
//                 dispatch(addLandlord(landlord))
//             })
//     }
// }
