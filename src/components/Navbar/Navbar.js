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
			<span className="navbar-change-theme">
				{darkMode ? (
					<i
						className="fas fa-sun theme-icon"
						onClick={() => setDarkMode((prev) => !prev)}
					></i>
				) : (
					<i
						className="fas fa-moon theme-icon"
						onClick={() => setDarkMode((prev) => !prev)}
					></i>
				)}{" "}
			</span>
		</div>
	);
};

export default Navbar;
