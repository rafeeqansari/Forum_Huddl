import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppContainer as App } from './App.Container';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';

let store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>

  , document.getElementById('root'));
registerServiceWorker();
