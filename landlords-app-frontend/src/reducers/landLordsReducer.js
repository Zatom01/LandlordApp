const initialState = {
    loading: true,
    landlords: [],
    houses: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOADING":
            return { ...state, loading: true }

        case "LOAD_LANDLORDS":
            return { ...state, loading: false, landlords: action.landlords }

        case "ADD_LANDLORD":
            return { ...state, landlords: state.landlords.concat(action.landlord) }

        case "DELETE_LANDLORD":
            return { ...state, landlords: state.landlords.filter(landlord => landlord.id !== action.id) }

        case "LOAD_HOUSES":
            return { ...state, houses: action.houses }

        case "RESET_HOUSES":
            return { ...state, houses: [] }


        default:
            return state;

    }
}
