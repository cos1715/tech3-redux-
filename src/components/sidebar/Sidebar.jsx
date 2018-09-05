import React from 'react';
import { NavLink } from 'react-router-dom'

import './Sidebar.css';

export const Sidebar = () => {
    return (
        <div className="Sidebar-div">
            <nav className="Sidebar-nav">
                <NavLink
                    to="/products"
                    className="Sidebar-link"
                    activeClassName="NavLink-selected"
                >Product list</NavLink>
                <NavLink
                    to="/cart"
                    className="Sidebar-link"
                    activeClassName="NavLink-selected"
                >Cart</NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;