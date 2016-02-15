import React, {PropTypes} from 'react';

const AddTodo = ({nextId, onAdd}) => {
	let input;
	return (
		<div>
			{"Todo Text:  "}
			<input ref={(node) => {input = node}} />
			<button onClick={e => {
				onAdd(nextId, input.value)
				input.value=''
			}}>Add Todo</button>
		</div>
	)
}

AddTodo.propTypes = {
	nextId: PropTypes.number.isRequired,
	onAdd: PropTypes.func.isRequired
}

export default AddTodo;
