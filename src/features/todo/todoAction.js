export const createItem = (todo) => {
	return { type: "CREATE", payload: todo };
};

export const deleteItem = (index) => {
	return { type: "DELETE", payload: index };
};
