import React from "react";
import "./buttons.css";

export const ResetButton = ({ resetHandler }) => {
	return (
		<div className="btn-icon-txt">
			<i className="fas fa-redo timer-icon" onClick={resetHandler}></i>
			<p>Reset</p>
		</div>
	);
};
