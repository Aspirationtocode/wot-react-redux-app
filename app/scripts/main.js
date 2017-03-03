import React from 'react';
import thunk from 'redux-thunk';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import firebase from 'firebase';

import mainReducer from './modules/reducers';
import App from './modules/components/App';

let store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
