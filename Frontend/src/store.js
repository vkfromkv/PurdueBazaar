/**
 * Redux store creation using legacy_createStore from 'redux',
 * and enhanced with middleware and development tools extension.
 *
 * @module store
 */

import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

/**
 * Initial state of the Redux store.
 * @type {Object}
 */
const initialState = {};

/**
 * Middleware array containing the 'redux-thunk' middleware.
 * @type {Array}
 */
const middleware = [thunk];

/**
 * Redux store instance with applied middleware and development tools extension.
 * @type {Object}
 * @property {Function} dispatch - The Redux store dispatch function.
 * @property {Function} getState - Retrieves the current state of the Redux store.
 * @property {Function} replaceReducer - Replaces the reducer currently used by the store.
 */
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

/**
 * Exports the configured Redux store.
 * @exports {Object} store - The Redux store instance.
 */
export default store;
