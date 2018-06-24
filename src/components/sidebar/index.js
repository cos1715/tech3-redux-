import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';



// export const SideBar = (props) => {
//   return (<div className="App-sidebar">
//     <nav className="App-sidebar-nav">
//       <Link to="/products" id="product-link" onClick={}>Product list</Link>
//       <Link to="/cart" id="cart-link">Cart</Link>
//     </nav>
//   </div>);
// };

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="App-sidebar">
      <nav className="App-sidebar-nav">
        <Link to="/products" id={this.props.id.id1}>Product list</Link>
        <Link to="/cart" id={this.props.id.id2}>Cart</Link>
      </nav>
    </div>);
  }

}

export default SideBar;