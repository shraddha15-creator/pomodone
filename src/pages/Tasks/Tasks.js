import React from "react";
import "./task.css";
import tasksDB from "../../tasksDB";

const Tasks = () => {
	return (
		<>
			<div className="tasks-container">
				<div className="title-and-btn">
					<h2>To-Do List</h2>
					<button className="button">
						<i class="fa fa-plus-circle"></i>
					</button>
				</div>

				{tasksDB &&
					tasksDB.map(({ id, title }) => {
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
