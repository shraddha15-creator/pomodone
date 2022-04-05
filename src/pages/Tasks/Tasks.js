import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./task.css";
import { Link } from "react-router-dom";

const Tasks = () => {
	const [todos, setTodos] = useState("");
	const [todoList, setTodoList] = useState([]);
	const [isEditing, setIsEditing] = useState(true);
	const [updatedTodo, setUpdatedTodo] = useState(null);
	const [isCompleted, setIsCompleted] = useState(true);

	const changeHandler = (e) => setTodos(e.target.value);

	const submitHandler = (e) => {
		e.preventDefault();
		if (!todos) {
			alert("Please add todo");
		} else if (todos && !isEditing) {
			setTodoList(
				todoList.map((todo) => {
					if (todo.id === updatedTodo) {
						return { ...todo, title: todos };
					}
					return todo;
				})
			);
			setTodos("");
			setIsEditing(true);
		} else {
			setTodoList([
				...todoList,
				{ id: uuidv4(), title: todos, isCompleted: false },
			]);
			setTodos("");
		}
	};

	const deleteHandler = (id) => {
		setTodoList(todoList.filter((todo) => id !== todo.id));
	};

	const editHandler = (id) => {
		const editedTodo = todoList.find((todo) => {
			return todo.id === id;
		});
		setIsEditing(false);
		setTodos(editedTodo.title);
		setUpdatedTodo(id);
	};

	return (
		<>
			<div className="tasks-container">
				<div className="title-and-btn">
					<h2>My To-Do</h2>
					<form onSubmit={submitHandler}>
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
								{isEditing ? (
									<i className="fa fa-plus-circle"></i>
								) : (
									<i className="fas fa-edit"></i>
								)}
							</button>
						</div>
					</form>
				</div>

				{todoList &&
					todoList.map(({ id, title }) => {
						return (
							<div key={id}>
								<Link to="/timer" state={{ title }} className="todo-items">
									<div>{title}</div>
									<div className="edit-delete-buttons">
										<button
											className="button btn-edit-delete"
											onClick={() => editHandler(id)}
										>
											<i className="fas fa-edit"></i>
										</button>
										<button
											className="button btn-edit-delete"
											onClick={() => deleteHandler(id)}
										>
											<i className="fas fa-trash-alt"></i>
										</button>
									</div>
								</Link>
							</div>
						);
					})}
			</div>
		</>
	);
};

export default Tasks;
