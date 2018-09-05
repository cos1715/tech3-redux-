import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const { inCart } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-header-h1"><Link to="/products" className="App-title">Producs</Link></h1>
          <div className="App-header-div">
            <button type="button" className="App-header-button">New Product</button>
            <h2 className="App-header-h2"><Link to="/cart" className="App-title">Cart: {inCart.length}</Link></h2>
          </div>
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


const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(App);