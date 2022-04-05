import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./task.css";
import tasksDB from "../../tasksDB";

const Tasks = () => {
	const [todos, setTodos] = useState("");
	const [todoList, setTodoList] = useState([]);
	const [isCompleted, setIsCompleted] = useState(true);

	const changeHandler = (e) => setTodos(e.target.value);

	const inputHandler = (e) => {
		e.preventDefault();
		setTodoList([
			...todoList,
			{ id: uuidv4(), title: todos, isCompleted: false },
		]);
		setTodos("");
	};

	return (
		<>
			<div className="tasks-container">
				<div className="title-and-btn">
					<h2>My To-Do</h2>
					<form onSubmit={inputHandler}>
						<div className="input-and-btn">
							<input
								type="text"
								className="add-todo-input"
								placeholder="Add todo"
								value={todos}
								required
								onChange={changeHandler}
							/>
							<button className="button">
								<i class="fa fa-plus-circle"></i>
							</button>
						</div>
					</form>
				</div>

				{tasksDB &&
					todoList.map(({ id, title }) => {
						console.log(todoList);
						return (
							<div className="todo-items" key={id}>
								<div>{title}</div>
								<div className="edit-delete-buttons">
									<button className="button btn-edit-delete">
										<i className="fas fa-edit"></i>
									</button>
									<button className="button btn-edit-delete">
										<i className="fas fa-trash-alt"></i>
									</button>
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
};

export default Tasks;
