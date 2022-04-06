import React from "react";
import "./buttons.css";

const ResetButton = ({ resetHandler }) => {
	return (
		<div>
			<i className="fas fa-redo timer-icon" onClick={resetHandler}></i>
		</div>
	);
};

export default ResetButton;
