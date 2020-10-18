const initialState = {
    loading: true,
    landlordHouses: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOADING":
            return { ...state, loading: true }

        case "LOAD_LANDLORDHOUSES":
            return { ...state, loading: false, landlordHouses: action.landlordHouses }

        case "ADD_LANDLORDHOUSE":
            return { ...state, landlordHouse: action.landlordHouse }

        case "DELETE_LANDLORDHOUSE":
            return state.filter(landlordHouse => landlordHouse.id !== action.id)

        default:
            return state;

    }
}
