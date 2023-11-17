/**
 * Root reducer combining multiple reducers using combineReducers from Redux.
 * @module reducers
 */

import { combineReducers } from "redux";
import authReducer from './auth';

/**
 * Root reducer that combines multiple reducers into a single reducer function.
 * @function
 * @param {Object} state - The current state of the Redux store.
 * @param {Object} action - The action dispatched to update the state.
 * @returns {Object} - The new state after applying the combined reducers.
 */
const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer;
