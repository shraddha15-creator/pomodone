import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../Context/theme-context";
import "./navbar.css";

const Navbar = () => {
	const { darkMode, setDarkMode } = useTheme();
	return (
		<div
			className={`pomo-navbar-container ${
				darkMode ? "dark-mode" : "light-mode"
			}`}
		>
			<div className="brand-details">
				<Link to="/">
					<span className="brand-name">pomoDone!</span>
				</Link>
			</div>
			<div className="navbar-links">
				<Link to="/tasks">
					<span className="links">
						<i className="fas fa-tasks"></i> Task
					</span>
				</Link>
				<Link to="/pomodoro">
					<span className="links">
						<i className="fa fa-stopwatch"></i> Pomodoro
					</span>
				</Link>
			</div>
			<div
				className="navbar-change-theme"
				onClick={() => setDarkMode((prev) => !prev)}
			>
				{darkMode ? (
					<i className="fas fa-sun"></i>
				) : (
					<i className="fas fa-moon"></i>
				)}
			</div>
		</div>
	);
};

export default Navbar;
