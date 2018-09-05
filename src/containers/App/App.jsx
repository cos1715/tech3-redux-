import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

// Components
import SideBar from '../../components/Sidebar/Sidebar';
import Cart from '../cart';
import ProductList from '../product-list';
import NotFound from '../../components/NotFound/NotFound'

// CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1><Link to="/products" className="App-title">Topics</Link></h1>
        </header>
        <div className="App-wrapper">
          <SideBar />
          <Switch>
            <Redirect exact from='/' to='/products' />
            <Route path='/products' component={ProductList} />
            <Route path="/cart" component={Cart} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}


export default App;