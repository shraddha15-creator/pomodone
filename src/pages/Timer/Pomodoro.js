import React from "react";
import Helmet from "react-helmet";
import { useParams } from "react-router-dom";
import PomoTask from "../../components/PomoTask/PomoTask";
import Timer from "../../components/Timer/Timer";
import Tasks from "../Tasks/Tasks";
import "./pomodoro.css";

const Pomodoro = () => {
	const { id } = useParams();
	const getTodoData = (todoData, todoId) => {
		return todoData && todoData.find((todo) => todo.id === todoId);
	};

	const todoData = getTodoData(Tasks.todoList, id);

	return (
		<>
			<Helmet>
				<title>Pomodone</title>
			</Helmet>
			<div className="pomodoro-container">
				<div className="timer">
					<h3>Let's Focus!</h3>
					<Timer />
				</div>

				<PomoTask {...todoData} />
			</div>
		</>
	);
};

export default Pomodoro;
