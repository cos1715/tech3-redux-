import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { addToCart } from "../../actions/actionCart";
import { orderItems } from "../../actions/actionProducts";
import {
  decreaseAvailability,
  itemsFetchDataSuccess,
  itemsHasErrored
} from "../../actions/actionData";

import Products from "../../components/Products/Products";

import "./ProductList.css";

class ProductList extends Component {
  componentDidMount() {
    const { fetchData } = this.props;

    fetchData("data.json");
  }
  orderByHandle = event => {
    const { orderItems } = this.props;

    orderItems(event.target.value);
  };

  orderBy = () => {
    const { allProducts, productListParams } = this.props;
    const sortedProducts = allProducts.slice(0);

    sortedProducts.sort((a, b) => {
      if (a[productListParams.orderBy] < b[productListParams.orderBy]) {
        return 1;
      }
      if (a[productListParams.orderBy] > b[productListParams.orderBy]) {
        return -1;
      }

      return 0;
    });

    return sortedProducts;
  };

  render() {
    const { addToCart, decreaseAvailability } = this.props;

    return (
      <div>
        <select
          className="ProductList-div-select"
          onChange={event => this.orderByHandle(event)}
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="available">Availability</option>
        </select>

        <div className="ProductList-div">
          <Products
            items={this.orderBy()}
            addToCart={addToCart}
            decreaseAvailability={decreaseAvailability}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addToCart: addToCart,
      orderItems: orderItems,
      decreaseAvailability: decreaseAvailability,
      fetchData: url => {
        return dispatch => {
          fetch(url)
            .then(response => {
              if (!response.ok) {
                throw Error(response.statusText);
              }
              return response;
            })
            .then(response => response.json())
            .then(items => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
        };
      }
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
