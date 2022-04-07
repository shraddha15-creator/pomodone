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
						Let's complete the {title} today!
					</p>
					<div className="pomo-tags">
						<h5 className="pomo-tag-item">#project</h5>
						<h5 className="pomo-tag-item">#work</h5>
						<h5 className="pomo-tag-item">#deadline</h5>
					</div>
				</div>
			</div>
		</>
	);
};

export default PomoTask;
