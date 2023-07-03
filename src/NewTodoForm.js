import React, { useState } from "react";

const NewTodoForm = ({ addTask }) => {
	const INITIAL_STATE = {newTask : ""};

	const [formData, setFormData] = useState(INITIAL_STATE)

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(() => ({
			[name] : value
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		addTask(formData.newTask);
		setFormData(INITIAL_STATE)
	}

	return (
		<form onSubmit={handleSubmit}>
			<label type="text">New Task: </label>
			<input
				type="text"
				id="new-task"
				name="newTask"
				placeholder="New Task"
				value = {formData.newTask}
				onChange={handleChange}
			/>
			<button type="submit">Add Task</button>
		</form>
	)
}

export default NewTodoForm