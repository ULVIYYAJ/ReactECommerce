import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import wishlistReducer from './WishlistSlice/wishlistSlice';
import cartReducer from '../feauters/cartSlice';
import userReducer from '../redux/User/user.reducer';

const rootReducer = combineReducers({
  gallery: wishlistReducer,
  cart: cartReducer,
  user: userReducer
});

const middlewares = [thunk, logger];

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export default store;


