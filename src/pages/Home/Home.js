import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/hero-img.png";

import "./home.css";

const Home = () => {
	return (
		<>
			<div className="homepage-container">
				<span className="user-greeting">Hi, Shraddha</span>

				<img src={HeroImg} alt="hero-image" className="hero-img" />
				<Link to="/tasks">
					<button className="btn-add-task">
						Add Task <i class="fa fa-plus-circle"></i>
					</button>
				</Link>
			</div>
		</>
	);
};

export default Home;
