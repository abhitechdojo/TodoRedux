import {
    TOGGLE_TODO,
    ADD_TODO,
    FILTER_TODO,
    REQUEST_TODO,
    RECEIVE_TODO_SUCCESS,
    RECEIVE_TODO_FAILURE,
    visibilityFilters} from '../../actions/TodoListActions';

const initialState = {
    visibilityFilter: visibilityFilters.SHOW_ALL,
    todos: [],
    errorText: '',
    isLoading: false
}

function todoAppReducer(state = initialState, action ) {
    switch(action.type) {
        case TOGGLE_TODO:
            return Object.assign({}, state, {todos: state.todos.map(x => {
                if (x.id === action.index) 
                    return Object.assign({}, x, {complete: !x.complete});
                else 
                    return x;
                })});
			break;
		case ADD_TODO:
			return Object.assign({}, state, {todos: [...state.todos, {id: action.id, text: action.text, complete: false}]});
			break;
		case FILTER_TODO:
			return Object.assign({}, state, {visibilityFilter: action.filter});
			break;
        case REQUEST_TODO:
            return Object.assign({}, state, {isLoading: action.isLoading});
            break;
        case RECEIVE_TODO_SUCCESS:
            return Object.assign({}, state, {todos: action.todos, isLoading: action.isLoading})
            break;
        case RECEIVE_TODO_FAILURE:
            return Object.assign({}, state, {errorText: action.errorText, isLoading: action.isLoading})
            break;
		default:
			return state;
	}
}

export default todoAppReducer;
