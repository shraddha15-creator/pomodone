import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/hero-img.png";
import { useTheme } from "../../Context/theme-context";

import "./home.css";

const Home = () => {
	const { darkMode } = useTheme();

	return (
		<>
			<div
				className={`homepage-container ${
					darkMode ? "dark-mode" : "light-mode"
				}`}
			>
				<span className="user-greeting">Hey, Welcome back!</span>

				<img src={HeroImg} alt="hero-banner" className="hero-img" />
				<Link to="/tasks">
					<button className="btn-add-task">
						Add Task <i className="fa fa-plus-circle"></i>
					</button>
				</Link>
			</div>
		</>
	);
};

export default Home;
