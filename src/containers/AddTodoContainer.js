import React from 'react';
import {connect} from 'react-redux';
import AddTodo from './controls/AddTodo.jsx';
import {addTodo} from '../actions/TodoListActions';

const mapStateToProps = (state) => {
	return {
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onAdd: (text) => {dispatch(addTodo(text))} 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
