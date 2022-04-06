import React from "react";
import "./buttons.css";

const PauseButton = ({ pauseHandler }) => {
	return (
		<div>
			<i className="fas fa-pause-circle timer-icon" onClick={pauseHandler}></i>
		</div>
	);
};

export default PauseButton;
