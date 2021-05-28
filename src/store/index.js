import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';

// MiddleWare basically controls between dispatching the action and reaching to the reducer

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);