import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList"



it("renders without crashing", () => {
	render(<TodoList />)
});

it("matches snapshot", () => {
	const { asFragment } = render(<TodoList />);
	expect(asFragment()).toMatchSnapshot();
})

it("creates and removes box", () => {
	const { queryByText } = render(<TodoList />);
	const addBtn = queryByText("Add Task");

	expect(queryByText('X')).not.toBeInTheDocument();
	fireEvent.click(addBtn);
	expect(queryByText('X')).toBeInTheDocument();

	const rmvBtn = queryByText("X");
	fireEvent.click(rmvBtn);
	expect(queryByText("X")).not.toBeInTheDocument();
})
