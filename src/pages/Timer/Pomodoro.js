import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useParams } from "react-router-dom";
import PomoTask from "../../components/PomoTask/PomoTask";
import Timer from "../../components/Timer/Timer";
import "./pomodoro.css";

const getLocalStorage = () => {
	let data = localStorage.getItem("myTodos");
	console.log(data);

	if (data) {
		return JSON.parse(localStorage.getItem("myTodos"));
	} else {
		return [];
	}
};

const Pomodoro = () => {
	const [todoList, setTodoList] = useState(getLocalStorage());
	const { task } = useParams();

	const getProductsData = (todoData, todoId) => {
		return todoData.find((todo) => todo.id === todoId);
	};

	const myTodos = getProductsData(todoList, task);
	console.log(myTodos);

	useEffect(() => {
		localStorage.setItem("myTodos", JSON.stringify(todoList));
		// console.log(todoList);
	}, [todoList]);

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
				<PomoTask {...myTodos} />
			</div>
		</>
	);
};

export default Pomodoro;
