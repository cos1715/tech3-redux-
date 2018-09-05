import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, } from "react-router-dom";

import App from './containers/App/App';//'./containers/App'

import './index.css';//add var

import registerServiceWorker from './registerServiceWorker';

import applicationStore from './registerApplicationStore';

ReactDOM.render(
  <Provider store={applicationStore()}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));

registerServiceWorker();
