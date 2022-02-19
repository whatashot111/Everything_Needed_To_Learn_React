import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import RouterContainer from "./avatar/RouterContainer";
import './index.css';
import contactReducer from './phone-directory-redux/reducers/contactReducer';

const store = createStore(contactReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RouterContainer />
    </Router>
  </Provider>,
  document.getElementById('root')
);
