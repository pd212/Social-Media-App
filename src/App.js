import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Home from './components/Home';
import ItemDetail from './components/ItemDetail';
import rootReducer from './store/reducer';


const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </Router>
    </Provider>
  );
};



export default App;














// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import ItemDetail from './components/ItemDetail';
// import Home from './components/Home'; 


// const App = () => {
//   return (
//     <Router>
//       <Route exact path="/" component={Home} />
//       <Route exact path="/item/:postId" component={ItemDetail} />
//     </Router>

//   );
// };

// export default App;