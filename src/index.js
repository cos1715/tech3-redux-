// Core dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom';


// Application dependencies
import './index.css';
import App from './App';
import Cart from './containers/cart';

// Progressive Web App support
import registerServiceWorker from './registerServiceWorker';

// Redux store
import applicationStore from './registerApplicationStore';


ReactDOM.render(
  <Provider store={applicationStore()}>
    <BrowserRouter history={HashRouter}>
      <div>
        <Route path="/products" component={App} />
        <Route path="/cart" component={Cart} />
      </div>
    </BrowserRouter>
    {/* <App /> */}
  </Provider>, document.getElementById('root'));

registerServiceWorker();
