import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Calculator from './containers/Calculator';
import { reducer } from './redux/reducers/reducer';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <Provider store={store}>
      <div>
        <Calculator />
      </div>
    </Provider>
  );
}

export default App;
