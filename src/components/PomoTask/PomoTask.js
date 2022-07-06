import React from "react";
import "./pomoTask.css";

const PomoTask = ({ title }) => {
	console.log(title);
	return (
		<>
			<div className="pomodoro-task-container">
				<div className="pomo-task-item">
					<h2>{title}</h2>

					<p className="pomo-task-description">
						{title ? (
							`Let's complete the ${title} today!`
						) : (
							<h2>Let's Focus</h2>
						)}
					</p>
				</div>
			</div>
		</>
	);
};

export default PomoTask;
