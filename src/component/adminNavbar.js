import React from 'react';
import {Link} from "react-router-dom";

const AdminNavbar = () => {
    return (
        <div>
<nav className="navbar navbar-expand-lg   fs-2 p-3 shadow-lg p-2 mb-5  bg-dark navbar-dark sticky-top rounded ">
  <a className="navbar-brand fs-1 " href='/a'>Admin Panel</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto">
    <li className="nav-item ">
        <Link to="/productlist" className="nav-link">Products </Link>
      </li>
      <li className="nav-item ">
        <Link to="/users" className="nav-link">Users </Link>
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

export default AdminNavbar;
