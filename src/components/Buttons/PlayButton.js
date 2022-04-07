import React from "react";
import "./buttons.css";

const PlayButton = ({ playHandler }) => {
	return (
		<div className="btn-icon-txt">
			<i className="fas fa-play-circle timer-icon" onClick={playHandler}></i>
			<p>Play</p>
		</div>
	);
};

export default PlayButton;
