import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo"


it("renders without crashing", () => {
	render(<Todo />)
});

it("matches snapshot", () => {
	const { asFragment } = render(<Todo />);
	expect(asFragment()).toMatchSnapshot();
})