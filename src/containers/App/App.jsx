import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { withRouter } from "react-router";
import { Route, Link, Switch, Redirect } from "react-router-dom";

import { addNewItem } from "../../actions/actionData";

import SideBar from "../../components/Sidebar/Sidebar";
import Cart from "../Cart/Cart";
import ProductList from "../ProductList/ProductList";
import NotFound from "../../components/NotFound/NotFound";
import Modal from "../../components/Modal/Modal";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
    this.modalNameInput = React.createRef();
    this.modalPriceInput = React.createRef();
    this.modalAvailabilityInput = React.createRef();
  }

  closeModal = () => {
    this.modalRef.current.close();
  };

  addNewDevice = (name, price, available) => {
    const { addNewItem } = this.props;
    const newItem = {
      name: name.value,
      price: parseInt(price.value, 10),
      available: parseInt(available.value, 10)
    };
    name.value = "";
    price.value = "";
    available.value = "";
    this.closeModal();
    addNewItem(newItem);
  };

  render() {
    const { inCart } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-header-h1">
            <Link to="/products" className="App-title">
              Producs
            </Link>
          </h1>
          <div className="App-header-div">
            <button
              type="button"
              className="App-header-button"
              onClick={() => this.modalRef.current.showModal()}
            >
              New Product
            </button>
            <h2 className="App-header-h2">
              <Link to="/cart" className="App-title">
                Cart: {inCart.length}
              </Link>
            </h2>
          </div>
        </header>
        <div className="App-wrapper">
          <SideBar />
          <Switch>
            <Redirect exact from="/" to="/products" />
            <Route path="/products" component={ProductList} />
            <Route path="/cart" component={Cart} />
            <Route component={NotFound} />
          </Switch>
        </div>

        <Modal ref={this.modalRef}>
          <h3 className="Modal-header">Add New Product</h3>
          <hr />
          <main className="Modal-main">
            <p className="Modal-p">Name</p>
            <input
              type="text"
              name="name"
              ref={this.modalNameInput}
              className="Modal-input"
              required
            />
            <p className="Modal-p">Price</p>
            <input
              type="number"
              name="price"
              ref={this.modalPriceInput}
              className="Modal-input"
              required
            />
            <p className="Modal-p">Availabilily</p>
            <input
              type="number"
              name="available"
              ref={this.modalAvailabilityInput}
              className="Modal-input"
              required
            />
          </main>
          <footer className="Modal-footer">
            <button
              className="Modal-footer-button"
              onClick={() =>
                this.addNewDevice(
                  this.modalNameInput.current,
                  this.modalPriceInput.current,
                  this.modalAvailabilityInput.current
                )
              }
            >
              Submit
            </button>
            <button className="Modal-footer-button" onClick={this.closeModal}>
              Cancel
            </button>
          </footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addNewItem: addNewItem
    },
    dispatch
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
