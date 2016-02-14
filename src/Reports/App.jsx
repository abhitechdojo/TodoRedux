import React from 'react';
import AddTodoContainer from '../containers/AddTodoContainer';
import FilterTodoContainer from '../containers/FilterTodoContainer';
import ShowTodoContainer from '../containers/ShowTodoContainer';

const App = () => (
	<div>
	<AddTodoContainer />
	<ShowTodoContainer />
	<FilterTodoContainer />
	</div>
)

export default App