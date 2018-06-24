import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import SideBar from './components/sidebar';
import Cart from './containers/cart';
import ProductList from './containers/product-list';
import Modal from './Modal';

// CSS
import './App.css';

const id = {
  id1: 'product-link',
  id2: 'id'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><Link to="/products">My simple shop</Link></h1>
          <div className="cart-title">
            <button onClick={this.toggleModal} >New product</button>
            <Modal show={this.state.isOpen}
              onClose={this.toggleModal}>
            </Modal>
            <h2><Link to="/cart">Cart: {this.props.inCart.length}</Link></h2>
          </div>
        </header>
        <div className="App-wrapper">
          <SideBar id={id} />
          <ProductList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(App);