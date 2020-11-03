const initialState = {
    loading: true,
    landlords: [],
    houses: [],
    house_number: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOADING":
            return { ...state, loading: true }

        case "LOAD_LANDLORDS":
            return { ...state, loading: false, landlords: action.landlords }

        case "ADD_LANDLORD":
            return { ...state, landlords: [...state.landlords, action.landlord] }

        case "LOAD_HOUSES":
            return { ...state, houses: action.houses, house_number: action.houses.length }

        case "ADD_LANDLORD_HOUSE":
            return { ...state, houses: [...state.houses, action.house] }

        case "DELETE_LANDLORD":
            return { ...state, landlords: state.landlords.filter(landlord => landlord.id !== action.id) }

        case "DELETE_LANDLORD_HOUSE":
            return { ...state, houses: state.houses.filter(house => house.id !== action.id) }

        case "UPDATE_LANDLORD_HOUSE":
            return { ...state, houses: [...state.houses] }

        case "RESET_HOUSES":
            return { ...state, houses: [] }


        default:
            return state;

    }
}
