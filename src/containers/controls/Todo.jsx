import React, {PropTypes} from 'react';

const Todo = ({todo, onTodoClick}) => (
	<li
		onClick={onTodoClick}
		style={{textDecoration: todo.complete ? 'line-through': 'none'}}
		>
		{todo.text}
	</li>
	)


Todo.propTypes = {
	todo: PropTypes.shape({
		id: PropTypes.number.isRequired,
		text: PropTypes.string.isRequired,
		complete: PropTypes.bool.isRequired
		}).isRequired,
	onTodoClick: PropTypes.func.isRequired
}

export default Todo;