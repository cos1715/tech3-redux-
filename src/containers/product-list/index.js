import React, { Component } from 'react';
import { connect } from 'react-redux';

import './product-list.css';

export class ProductList extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }


  handleChange = (event) => {
    let str = '';
    if (event.target.value === 'Name')
      str = 'name';
    else {
      if (event.target.value === 'Price')
        str = 'price';
      else
        str = 'available';
    }
    this.props.products.sort(function (a, b) {
      if (a[str] < b[str]) {
        return 1;
      }
      if (a[str] > b[str]) {
        return -1;
      }
      return 0;
    });
    this.setState({});
  }

  renderProducts() {
    return this.props.products.map((i, index) => (
      <div className="product_list_item" key={index}>
        <p>{i.name}</p>
        <p>Price: {i.price}</p>
        <p>{i.available}: {i.available > 0 ? 'In stock' : 'Sold out'}</p>
        <button className="add-to-cart-btn" onClick={() => this.addToCart(i)} disabled={i.available > 0 ? false : true}>Add to card</button>
      </div>
    ));
  }

  addToCart(i) {
    this.props.inCart.push(i);
    i.available--;
    this.setState({});
  }

  render() {
    return (
      <div>
        <select name="sort" onChange={this.handleChange} id="sortSelect">
          <option value="Name">Name</option>
          <option value="Price">Price</option>
          <option value="Availability">Availability</option>
        </select>
        <div className="App-product_list" >
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(ProductList);