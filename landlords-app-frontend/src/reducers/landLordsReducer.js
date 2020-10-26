const initialState = {
    loading: true,
    landlords: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOADING":
            return { ...state, loading: true }

        case "LOAD_LANDLORDS":
            return { ...state, loading: false, landlords: action.landlords }

        case "ADD_LANDLORD":
            return { ...state, landlord: action.landlord }

        case "DELETE_LANDLORD":
            return { ...state, landlords: state.landlords.filter(landlord => landlord.id !== action.id) }

        case "SHOW_HOUSES":
            return { ...state, houses: action.landlords }

        default:
            return state;

    }
}
