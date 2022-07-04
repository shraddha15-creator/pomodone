import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Helmet from "react-helmet";
import { PauseButton, PlayButton, ResetButton } from "../Buttons";
import "./timer.css";

const Timer = () => {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(30);
	const [playPause, setPlayPause] = useState("");

	useEffect(() => {
		let newTimer;

		if (playPause === "Play") {
			newTimer = setTimeout(() => {
				if (seconds === 59 && playPause !== "Pause") {
					setSeconds((seconds) => seconds - 1);
					setMinutes((minutes) => minutes - 1);
				} else if (seconds === 0) {
					setSeconds(59);
				} else {
					setSeconds((seconds) => seconds - 1);
				}
			}, 1000);
		}

		return () => clearTimeout(newTimer);
	}, [seconds, playPause]);

	const playHandler = () => {
		setPlayPause("Play");
	};

	const pausehandler = () => {
		setPlayPause("Pause");
	};

	const resetHandler = () => {
		setPlayPause("Pause");
		setSeconds(0);
		setMinutes(30);
	};

	return (
		<>
			<Helmet>
				<title>{`${minutes < 10 ? "0" + minutes : minutes} : ${
					seconds < 10 ? "0" + seconds : seconds
				} 👩‍💻 | Pomodone`}</title>
			</Helmet>
			<div className="timer">
				<CircularProgressbar
					value={minutes}
					maxValue={30}
					text={`${minutes < 10 ? "0" + minutes : minutes} : ${
						seconds < 10 ? "0" + seconds : seconds
					}`}
					styles={buildStyles({
						textColor: "#2D27DC",
						pathColor: "#2D27DC",
						trailColor: "#ccc",
					})}
				/>
				<div className="timer-btns">
					<ResetButton resetHandler={resetHandler} />
					{playPause === "Play" ? (
						<PauseButton pauseHandler={pausehandler} />
					) : (
						<PlayButton playHandler={playHandler} />
					)}
				</div>
			</div>
		</>
	);
};

export default Timer;
