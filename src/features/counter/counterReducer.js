const initialState = 0
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return state + action.payload
        case "MINUS":
            return state - action.payload
        default:
            return state
    }
}

export default counterReducer;