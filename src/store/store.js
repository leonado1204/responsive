import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/auth';
import userReducer from './reducers/user';
import initialState from './initialState';
const totalReducer = combineReducers({
    auth                : authReducer,
    user                : userReducer,
});

// const enhancer = MODE === "development" ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : undefined

const store = createStore(totalReducer, initialState);

export default store;