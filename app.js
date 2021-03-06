import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { AppRegistry } from 'react-native';

import reducer from './app/reducers';
import AppContainer from './app/containers/appContainer';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initalState) {
	// compose a enhancer with all of the middleware required.
	const enhancer = compose(
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		), );
	// create the store with the composed enhancer, initial state and the reducer functions.
	return createStore(reducer, initalState, enhancer);
}

// create a single store with no initial state.
const store = configureStore({});
const App = () => {
	return (
		<Provider store={store} >
			<AppContainer />
		</Provider>
	)
}

AppRegistry.registerComponent('ReactNativeProject', () => App);
