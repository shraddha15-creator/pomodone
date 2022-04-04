import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<Link to="/tasks">Task</Link>
			<Link to="/timer">Timer</Link>
			<Link to="/settings">Settings</Link>
		</div>
	);
};

export default Navbar;
