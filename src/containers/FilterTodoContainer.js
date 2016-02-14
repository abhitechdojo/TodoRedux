import React from 'react';
import FilterTodo from './controls/FilterTodo.jsx';
import {connect} from 'react-redux';
import {visibilityFilters, setVisibilityFilter} from '../actions/TodoListActions';
import TodoListActions from '../actions/TodoListActions';

const mapStateToProps = (state) => {
	return {
		visibilityStates : Object.keys(visibilityFilters)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onFilterClick: (text) => {dispatch(setVisibilityFilter(text))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterTodo)
