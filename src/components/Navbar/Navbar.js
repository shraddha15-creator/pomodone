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
						<i className="fas fa-tasks"></i> Task
					</span>
				</Link>
				<Link to="/pomodoro">
					<span className="links">
						<i className="fa fa-stopwatch"></i> Pomodoro
					</span>
				</Link>

				{/* will work on this later on  */}

				{/* <Link to="/settings">
					<span className="links">
						<i className="fas fa-cogs"></i> Settings
					</span>
				</Link> */}
			</div>
			<div className="navbar-change-theme">
				<i className="fas fa-sun"></i> Change theme{" "}
				<i className="fas fa-moon"></i>
			</div>
		</div>
	);
};

export default Navbar;
