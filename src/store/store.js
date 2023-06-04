import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import postReducer from './reducers/postReducer';
// import postReducer from './reducer/postReducer';
import postReducer from './reducer';

const store = createStore(postReducer, applyMiddleware(thunk));

export default store;








