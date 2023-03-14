import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import wishlistReducer from './WishlistSlice/wishlistSlice';
import cartReducer from '../feauters/cartSlice';
import userReducer from '../redux/User/user.reducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../redux/rootSaga';

const rootReducer = combineReducers({
  gallery: wishlistReducer,
  cart: cartReducer,
  user: userReducer
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware, logger];

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export default store;


