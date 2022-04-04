import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
	return (
		<div className="pomo-navbar-container">
			<div className="brand-details">
				<Link to="/">
					<span className="brand-name">pomoDone!</span>
				</Link>
			</div>
			<div className="navbar-links">
				<Link to="/tasks">
					<span className="links">
						<i class="fas fa-tasks"></i> Task
					</span>
				</Link>
				<Link to="/timer">
					<span className="links">
						<i class="fa fa-stopwatch"></i> Timer
					</span>
				</Link>
				<Link to="/settings">
					<span className="links">
						<i class="fas fa-cogs"></i> Settings
					</span>
				</Link>
			</div>
			<div className="navbar-change-theme">
				<i class="fas fa-sun"></i> Change theme <i class="fas fa-moon"></i>
			</div>
		</div>
	);
};

export default Navbar;
