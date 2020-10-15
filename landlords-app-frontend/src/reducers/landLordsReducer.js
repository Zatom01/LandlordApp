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
        default:
            return state;

    }
}
