import React from "react";
import Timer from "../../components/Timer/Timer";
import Helmet from "react-helmet";
import "./pomodoro.css";

const Pomodoro = () => {
	return (
		<>
			<Helmet>
				<title>Pomodone</title>
			</Helmet>
			<div className="pomodoro-container">
				<div className="timer">
					<h3>Let's Focus!</h3>
					<Timer />
				</div>
				<div className="pomodoro-task-container">
					<div className="pomo-task-item">
						<h2>Complete Homework</h2>
						<p className="pomo-task-description">
							Let's complete the Homework today!
						</p>
						<div className="pomo-tags">
							<h5 className="pomo-tag-item">#project</h5>
							<h5 className="pomo-tag-item">#work</h5>
							<h5 className="pomo-tag-item">#deadline</h5>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Pomodoro;
