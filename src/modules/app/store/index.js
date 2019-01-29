import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './reducers';

const logger = createLogger({
    level: 'info',
    collapsed: true,
});

export const store = createStore(combineReducers({ ...reducers }), composeWithDevTools(applyMiddleware(thunk, logger)));
