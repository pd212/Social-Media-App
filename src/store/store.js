import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import postReducer from './reducers/postReducer';
// import postReducer from './reducer/postReducer';
import postReducer from './reducer';

const store = createStore(postReducer, applyMiddleware(thunk));

export default store;








//working code
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducer/postReducer'; // Updated import statement

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;
