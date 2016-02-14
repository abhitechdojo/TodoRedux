import React, {PropTypes} from 'react';

const AddTodo = ({onAdd}) => {
	let input;
	return (
		<div>
			{"Todo Text:  "}
			<input ref={(node) => {input = node}} />
			<button onClick={e => {
				onAdd(input.value)
				input.value=''
			}}>Add Todo</button>
		</div>
	)
}

AddTodo.propTypes = {
	onAdd: PropTypes.func.isRequired
}

export default AddTodo;
