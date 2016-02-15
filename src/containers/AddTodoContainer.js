import React from 'react';
import {connect} from 'react-redux';
import AddTodo from './controls/AddTodo.jsx';
import {addTodo} from '../actions/TodoListActions';

const mapStateToProps = (state) => {
	return {
		nextId: state.nextId
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onAdd: (nextId, text) => {dispatch(addTodo(nextId, text))} 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
