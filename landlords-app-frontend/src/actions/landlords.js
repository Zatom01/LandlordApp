const LOADING = { type: "LOADING" };
const BASE_URL = 'http://localhost:3001'

export const fetchLandlords = () => {
    //thunk requires a function to be returned

    return (dispatch) => {
        dispatch(LOADING)

        fetch(BASE_URL + '/users')
            .then(resp => resp.json())
            .then(landlords => dispatch({ type: "LOAD_LANDLORDS", landlords }))

    }
}
