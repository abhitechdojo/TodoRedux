import Firebase from 'firebase';

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

export function addLocalTodo(id, text) {
	return {
		type: ADD_TODO,
		text,
		id: id,
        nextId: ++id
	}
}

export function addTodo(nextId, text) {
    return (dispatch) => {
        var fireBaseRef = new Firebase("https://todoredux1.firebaseio.com/todos");
        var newObjRef = fireBaseRef.push();
        newObjRef.set({'id': nextId, 'text': text, 'complete': false});
        return dispatch(addLocalTodo(nextId, text));
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
    console.log(todos);
    var maxId = todos.reduce(function(p, c, i, a) { 
        if (p.id >= c.id) {
            return p.id
        } else {
            return c.id
        }
    });    
	return {
		type: RECEIVE_TODO_SUCCESS,
		todos,
		isLoading: false,
        nextId: ++maxId
	}
}

export function receiveTodosFailure(errorText) {
	return {
		type: RECEIVE_TODO_FAILURE,
		errorText,
		isLoading: false
	}
}

export function toggleLocalTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export function toggleTodo(id) {
    return (dispatch) => {
        var onComplete = function(error) {
          if (error) {
            console.log('Synchronization failed ' + error);
          }
        };        
        var fireBaseRef = new Firebase("https://todoredux1.firebaseio.com/todos");
        fireBaseRef.orderByChild("id").equalTo(id).once('child_added', function(todoRef){
            const key = todoRef.key();
            const todo = todoRef.val();
            fireBaseRef.child(key).update(Object.assign({}, todo, {complete: !todo.complete}), onComplete);
        });
        return dispatch(toggleLocalTodo(id));
    }
}

export function getTodosFromWeb() {
	return (dispatch) => {
		// set isLoading to true
		dispatch(requestTodos());
        var fireBaseRef = new Firebase("https://todoredux1.firebaseio.com");
        fireBaseRef.child('todos').once('value', function(todosRef){
            return dispatch(receiveTodosSuccess(todosRef.val()))
        }, function(errorText) {
            return dispatch(receiveTodosFailure(errorText))
        });
	}
}