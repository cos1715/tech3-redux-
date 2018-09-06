import React, { Component } from "react";

import "./Products.css";

class Products extends Component {
  addToCart = item => {
    const { decreaseAvailability, addToCart } = this.props;
    decreaseAvailability(item);
    addToCart(item);
  };

  render() {
    const { items } = this.props;
    return items.map((item, index) => (
      <div className="Products_item" key={index}>
        <p>{item.name}</p>
        <p>Price: {item.price}</p>
        <p>{item.available > 0 ? `In stock: ${item.available}` : `Sold out`}</p>
        <button
          type="button"
          className="Products-button"
          disabled={item.available > 0 ? false : true}
          onClick={() => this.addToCart(item)}
        >
          Add to card
        </button>
      </div>
    ));
  }
}

export default Products;
