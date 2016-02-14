import todoAppReducer from './reducers/TodoAppReducer';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import {getTodosFromWeb} from '../actions/TodoListActions';

const loggerMiddleware = createLogger();
const store = createStore(
	todoAppReducer, 
	applyMiddleware(thunkMiddleware, loggerMiddleware)
);

store.dispatch(getTodosFromWeb());
export default store;
