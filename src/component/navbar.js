import React from 'react';
import {Link} from "react-router-dom"
import { Cart } from '../context/context';

import { useContext } from 'react';





const Navbar = () => {

  const {cart}=useContext(Cart)
    return (
        <div>
<nav className="navbar navbar-expand-lg   fs-2 p-3 shadow-lg p-2 mb-5  bg-dark navbar-dark sticky-top rounded ">
  <a className="navbar-brand fs-1 " href='/'>Food Court</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto">
    <li className="nav-item ">
        <Link to="/adminlogin" className="nav-link">Admin </Link>
      </li>
      <li className="nav-item ">
        <Link to="/home" className="nav-link">Home </Link>
      </li>
      <li className="nav-item">
        <Link to="/cart" className="nav-link   text-white ms-1 rounded-pill">Cart <span style={{color:"red"}}>{cart.length}</span></Link>
        {/* <button className="btn btn-outline-dark" id="cart" type="submit">
                        <i className="bi-cart-fill me-1"></i>
                        Cart
                        <span className="badge  text-white ms-1 rounded-pill cart"></span>
                    </button> */}
      </li>
      <li className="nav-item active">
        <Link to="/"  className="nav-link">Logout </Link>
      </li>
     
     
    </ul>
  </div>
</nav>

        </div>
    );
}

export default Navbar;
