import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './Reports/App.jsx';
import TodoAppStore from './stores/TodoAppStore';

render (
	<Provider store={TodoAppStore}>
		<App />
	</Provider>,
	document.getElementById('container')
)