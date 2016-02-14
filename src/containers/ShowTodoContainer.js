import {connect} from 'react-redux';
import ShowTodo from './controls/ShowTodo.jsx';
import {visibilityFilters, toggleTodo} from '../actions/TodoListActions';

const applyVisibilityFilter = (todos, filter) => {
	switch(filter) {
		case visibilityFilters.SHOW_ALL:
			return todos;
			break;
		case visibilityFilters.SHOW_ACTIVE:
			return todos.filter(x => x.complete === false)
			break;
		case visibilityFilters.SHOW_COMPLETE:
			return todos.filter(x => x.complete === true);
			break;
		default:
			return todos;
			break
	}
}

const mapStateToProps = (state) => {
	return {
		todos: applyVisibilityFilter(state.todos, state.visibilityFilter, state.error),
		errorText: state.errorText,
		isLoading: state.isLoading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (index) => dispatch(toggleTodo(index))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowTodo);
