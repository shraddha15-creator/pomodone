import React from "react";
import "./buttons.css";

const PlayButton = ({ playHandler }) => {
	return (
		<div>
			<i className="fas fa-play-circle timer-icon" onClick={playHandler}></i>
		</div>
	);
};

export default PlayButton;
