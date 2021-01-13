export const addCouter = (value) => {
	return { type: "ADD", payload: value };
};

export const minusCouter = (value) => {
	return { type: "MINUS", payload: value };
};
