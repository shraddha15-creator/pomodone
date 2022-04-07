import React from "react";
import "./buttons.css";

const PauseButton = ({ pauseHandler }) => {
	return (
		<div className="btn-icon-txt">
			<i className="far fa-pause-circle timer-icon" onClick={pauseHandler}></i>
			<p>Pause</p>
		</div>
	);
};

export default PauseButton;
