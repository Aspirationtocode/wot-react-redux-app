import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import mainReducer from './modules/reducers'

import App from './modules/components/App';

let store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
