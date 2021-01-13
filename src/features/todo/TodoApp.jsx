import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createItem, deleteItem } from "./todoAction";

function TodoApp() {
    const [todo, setTodo] = useState("");

    const todos = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        if(!todo) return;
        dispatch(createItem(todo));
        setTodo("");
    }

    function handleDelete(index) {
        dispatch(deleteItem(index));
    }

    function todosMap() {   
        return todos.map((value, index) => (
            <li style={{ marginBottom: 5 }} key={index}>
                <button style={{ marginRight: 10 }} onClick={() => handleDelete(index)}>Delete</button>
                <span>{value}</span>
            </li>
        ))
    }

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<h1>TodoApp</h1>
			<input value={todo} type="text" onChange={(e) => setTodo(e.target.value)} autoComplete="off"/>
			<button style={{marginLeft: 10}} type="submit">Create</button>
			<ul>{todosMap()}</ul>
		</form>
	);
}

export default TodoApp;
