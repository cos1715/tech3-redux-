import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  addToCart,
  removeFromCart,
  removeWholeItemsFromCart
} from "../../actions/actionCart";
import {
  increaseAvailability,
  decreaseAvailability
} from "../../actions/actionData";

import "./Cart.css";

export class Cart extends Component {
  addItemToCart = element => {
    const { decreaseAvailability, addToCart } = this.props;
    const newItem = Object.assign({}, element.item, {
      available: element.item.available - element.inCart
    });
    decreaseAvailability(newItem);
    addToCart(newItem);
  };

  removeItemFromCart = element => {
    const { increaseAvailability, removeFromCart } = this.props;
    const newItem = Object.assign({}, element.item, {
      available: element.item.available - element.inCart
    });
    increaseAvailability(newItem);
    removeFromCart(newItem);
  };

  removeWholeItemFromCart = element => {
    const { increaseAvailability, removeWholeItems } = this.props;
    const newItem = Object.assign({}, element.item, {
      available: element.item.available - 1
    });
    increaseAvailability(newItem);
    removeWholeItems(element.item);
  };

  calcTotalPrice = () => {
    const { inCart } = this.props;
    let totalPrice = 0;
    inCart.forEach(item => {
      totalPrice += item.price;
    });
    return <h3 className="Cart_price">Total Price: {totalPrice}</h3>;
  };

  renderCart = () => {
    const { inCart } = this.props;
    const products = inCart.reduce(
      (b, c) => (
        (
          b[b.findIndex(d => d.item.name === c.name)] ||
          b[b.push({ item: c, inCart: 0 }) - 1]
        ).inCart++,
        b
      ),
      []
    );

    return products.map((element, index) => (
      <div className="Cart_item" key={index}>
        <p className="Cart_item-name">{element.item.name}</p>
        <p className="Cart_item-price">
          Price: {element.item.price * element.inCart}
        </p>
        <div className="Cart_item-controls">
          <p className="Cart_item-amount">{element.inCart}</p>
          <button
            type="button"
            className="Cart-product-btn Cart-product-up"
            disabled={element.item.available === element.inCart ? true : false}
            onClick={() => this.addItemToCart(element)}
          >
            ↑
          </button>
          <button
            type="button"
            className="Cart-product-btn Cart-product-down"
            disabled={element.inCart === 1 ? true : false}
            onClick={() => this.removeItemFromCart(element)}
          >
            ↓
          </button>
        </div>
        <button
          type="button"
          className="Cart-product-btn Cart-product-delete"
          onClick={() => this.removeWholeItemFromCart(element)}
        >
          Delete
        </button>
      </div>
    ));
  };

  render() {
    const { inCart } = this.props;
    if (inCart.length === 0) {
      return (
        <div className="Cart_msg">
          {this.props.inCart.length
            ? "There is some items in you cart"
            : "Your cart is empty :("}
        </div>
      );
    } else {
      return (
        <div>
          {this.renderCart()}
          {this.calcTotalPrice()}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addToCart: addToCart,
      removeFromCart: removeFromCart,
      removeWholeItems: removeWholeItemsFromCart,
      increaseAvailability: increaseAvailability,
      decreaseAvailability: decreaseAvailability
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
