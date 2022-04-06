import React, { useEffect, useState, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import PauseButton from "../Buttons/PauseButton";
import PlayButton from "../Buttons/PlayButton";
import ResetButton from "../Buttons/ResetButton";
import Settings from "../Buttons/Settings";
import "./timer.css";

const Timer = () => {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(30);
	let timer;

	useEffect(() => {
		timer = setInterval(() => {
			setSeconds(seconds - 1);

			if (seconds === 0) {
				setMinutes(minutes - 1);
				setSeconds(59 - 1);
			}
		}, 1000);
		return () => clearInterval(timer);
	});

	const playHandler = () => {
		setInterval(() => {
			setSeconds(seconds + 1);

			if (seconds === 59) {
				setMinutes(minutes - 1);
				setSeconds(0);
			}
		}, 1000);
	};

	const pausehandler = () => {
		clearInterval(timer);
	};

	const resetHandler = () => {
		setSeconds(0);
		setMinutes(30);
	};

	return (
		<>
			<Helmet>
				<title>{`${minutes} : ${seconds} 👩‍💻 | Pomodone`}</title>
			</Helmet>
			<div className="timer">
				<CircularProgressbar
					value={minutes}
					maxValue={30}
					text={`${minutes} : ${seconds}`}
					styles={buildStyles({
						textColor: "#2D27DC",
						pathColor: "#2D27DC",
						trailColor: "#ccc",
					})}
				/>
				<div className="timer-btns">
					<ResetButton resetHandler={resetHandler} />
					<PlayButton playHandler={playHandler} />
					<PauseButton pauseHandler={pausehandler} />
				</div>
				{/* <div>
					<Link to="/settings">
						<Settings />
					</Link>
				</div> */}
			</div>
		</>
	);
};

export default Timer;
