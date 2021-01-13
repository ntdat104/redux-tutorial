const initialState = ["Listen to music", "Play games"]
const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CREATE":
			return [...state, action.payload];
		case "DELETE":
			const newState = [...state];
			newState.splice(action.payload, 1)
			return newState;
		default:
			return state;
	}
};

export default todoReducer;
