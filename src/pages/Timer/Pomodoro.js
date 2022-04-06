import React from "react";
import Timer from "../../components/Timer/Timer";
import Tasks from "../Tasks/Tasks";
import "./pomodoro.css";

const Pomodoro = () => {
	return (
		<>
			<div className="pomodoro-container">
				<div className="timer">
					<h3>Let's Focus!</h3>
					<Timer />
				</div>
				{/* <div>
					<h3>It's a Break time!</h3>
					<Timer />
				</div> */}
				<div className="pomodoro-task-container">
					{/* <h3>my task</h3> */}
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
