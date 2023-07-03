import React, { useState}  from "react";
import { v4 as uuid } from 'uuid';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";


const TodoList = () => {
	const [todoList, setTodoList ] = useState([]);

	const addTask = (newTask) => {
		console.log(newTask)
		setTodoList((todoList) => [...todoList, {task : newTask, id: uuid() }])
	}

	const removeTodo = (e) => {
		e.preventDefault();
		const taskId = e.target.parentNode.id;
		setTodoList((todoList) => (
			[...todoList].filter(task => task.id !== taskId)
		))
	}


	return (
		<>
			<div>
				{todoList.map((task) => (
					<Todo 
						key={task.id}
						id={task.id}
						task={task.task}
						removeTodo={removeTodo} />
				))} 
			</div>
			<NewTodoForm addTask={addTask} />
		</>
	)

}

export default TodoList