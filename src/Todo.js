import React from "react";

const Todo = ({ task, id, removeTodo }) => {
	
	return (
		<div id={id}>
			<span>{task}</span>
			<button id={id} onClick={removeTodo}>X</button>
		</div>
	)
}

export default Todo