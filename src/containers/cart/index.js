import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SideBar from '../../components/sidebar';

import './cart.css';

const id = {
  id1: 'id',
  id2: 'cart-link'
}

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  state = {
    filterInCart: []
  }

  filter = () => {
    let arr = {};
    this.props.inCart.map((i, index) => {
      if (i.name !== arr[i.name]) {
        arr[i.name] = i.name;
        i.amount = 1;
        this.state.filterInCart.push(i);
      }
      else
        i.amount++;
    });
  }

  renderCartProducts = () => {
    let filter = this.state.filterInCart.map((i, index) => (
      < div className="cart_list_item" key={index}>
        <div className="c1">
          <p id={'id' + index}>{i.name}</p>
          <p>Price: {i.price}</p>
        </div>
        <div className="c2">
          <p className="c2">Amount: {i.amount}</p>
        </div>
        <div className="c3">
          <button id={'up' + index} onClick={(this.increaseFromCart)} disabled={i.available > 0 ? false : true}>↑</button>
          <button id={'down' + index} onClick={(this.decreaseFromCart)}>↓</button>
          <br /><br /></div>
        <div className="c4">
          <button className="c4" id={'re' + index} onClick={(this.removeFromCart)}>Remove</button>
        </div>
      </div >
    ));
    return filter;
  }

  removeFromCart = (event) => {
    let index = event.target.id.split('');
    index = index[2];
    let obj = this.props.inCart;
    let n = 0, k = 0;
    let name = document.getElementById(`id${index}`).innerHTML;
    this.props.products.forEach((i, index) => {
      if (i.name === name)
        n = index;
    });
    obj.forEach((i, index) => {
      if (i.name === name)
        k = index;
    });
    this.props.products[n].available += obj[k].amount;
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].name === name) {
        obj.splice(i, 1);
        i = -1;
      }
    }
    this.setState({ filterInCart: [] });
  }


  increaseFromCart = (event) => {
    let index = event.target.id.split('');
    index = index[2];
    let n = 0;
    let name = document.getElementById(`id${index}`).innerHTML;
    this.props.products.forEach((i, index) => {
      if (i.name === name)
        n = index;
    });
    if (this.props.products[n].available != 0) {
      this.props.products[n].available--;
      this.props.inCart.push(this.props.products[n]);
      this.setState({ filterInCart: [] });
    }
  }

  decreaseFromCart = (event) => {
    let index = event.target.id.split('');
    index = index[4];
    let n = 0;
    let name = document.getElementById(`id${index}`).innerHTML;
    this.props.inCart.every((i, index) => {
      if (i.name === name) {
        n = index;
        return false;
      }
      else
        return true;
    });
    this.props.inCart.splice(n, 1);
    this.props.products.forEach((i, index) => {
      if (i.name === name)
        n = index;
    });
    this.props.products[n].available++;
    this.setState({ filterInCart: [] });
  }


  totalPrice = () => {
    let sum = 0;
    this.props.inCart.forEach(element => {
      sum += element.price;
    });
    return sum;
  }

  render() {
    return (
      <div className="App-cart">
        <header className="Cart-header">
          <h1 className="App-title"><Link to="/products">My simple shop</Link></h1>
          <h2 className="cart-title"><Link to="/cart">Cart: {this.props.inCart.length}</Link></h2>
        </header>
        <div className="Cart-wrapper">
          <SideBar id={id} />
          {this.props.inCart.length ? 'There is some items in you cart' : 'Your cart is empty :('}
          <div className="App-Cart_list" >
            {this.filter()}
            {this.renderCartProducts()}
            <h3>Total Price: {this.totalPrice()}</h3>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Cart);
