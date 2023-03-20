import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import booksReducer from './books';

const rootReducer = combineReducers({
  books: booksReducer,

})

const logger = require("redux-logger").default;
const composeEnhancers =
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(logger));

//pass in preloaded
export const configureStore = (preloaded={}) => {
  return createStore(rootReducer, preloaded, enhancer)
};

export default configureStore;

//import createStore and combineReducers
