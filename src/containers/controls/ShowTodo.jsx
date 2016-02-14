import React, {PropTypes} from 'react';
import Todo from './Todo.jsx';


const normalBody = (todos, onTodoClick) => {
	return (
		<div>
			<ul>
				{
					todos.map(todo => {return(<Todo key={todo.id} onTodoClick={() => onTodoClick(todo.id)} todo={todo}></Todo>)})
				}
			</ul>
		</div>
	);
}

const errorBody = (errorText) => {
	return (
		<div><p>`Could not get todos from server ${errorText}`</p></div>
	)
}

const isLoadingBody = () => {
	return (
		<div>todos are loading. please be patient</div>
	)
}

const ShowTodo = ({todos, onTodoClick, errorText, isLoading}) => {
	// is loading
	if (isLoading && isLoading === true) {
		return isLoadingBody();
	}

	// is error
	if (errorText && errorText !== '') {
		return errorBody(errorText)
	}
	
	return normalBody(todos, onTodoClick);
}

ShowTodo.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			complete: PropTypes.bool.isRequired
		}).isRequired
	).isRequired,
	onTodoClick: PropTypes.func.isRequired,
	errorText: PropTypes.string.isRequired,
	isLoading: PropTypes.bool.isRequired
}

export default ShowTodo;
