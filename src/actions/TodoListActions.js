export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const FILTER_TODO = "FILTER_TODO";
export const REQUEST_TODO = "REQUEST_TODOS";
export const RECEIVE_TODO_SUCCESS = "RECEIVE_TODOS_SUCCESS";
export const RECEIVE_TODO_FAILURE = "RECEIVE_RODOS_FAILURE";

export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETE: 'SHOW_COMPLETE'
}

let nextId = 0;

export function addTodo(text) {
	return {
		type: ADD_TODO,
		text,
		id: nextId++
	}
}

export function toggleTodo(index) {
	return {
		type: TOGGLE_TODO,
		index
	}
}

export function setVisibilityFilter(filter) {
	return {
		type: FILTER_TODO,
		filter
	}
}

export function requestTodos() {
	return {
		type: REQUEST_TODO,
		isLoading: true
	}
}

export function receiveTodosSuccess(todos) {
	return {
		type: RECEIVE_TODO_SUCCESS,
		todos,
		isLoading: false
	}
}

export function receiveTodosFailure(errorText) {
	return {
		type: RECEIVE_TODO_FAILURE,
		errorText,
		isLoading: false
	}
}

export function getTodosFromWeb() {
	return (dispatch) => {
		// set isLoading to true
		dispatch(requestTodos());
		setTimeout(function(){}, 100000);
		return fetch(`https://todoredux1.firebaseio.com/todos.json`)
      		.then(response => response.json())
      		.then(json => {
		        dispatch(receiveTodosSuccess(json))} // on success
      		).catch(error =>
      			dispatch(receiveTodosFailure(error))
      		)
	}
}