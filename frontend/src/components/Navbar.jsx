import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import {jwtDecode} from 'jwt-decode'

function Navbar() {

  const tokenRemove = (e) => {
    localStorage.removeItem("token");
  };
  const token = localStorage.getItem("token");
  const decoded=jwtDecode(token)
  
  let name=decoded.name
  console.log(name);
  
  if (token) {
    return (
      <nav className="navbar">
        <div className="nav-logo">MyApp</div>
        <ul className="nav-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/addProduct">Add Product</Link>
          </li>
          <p>{name}</p>
          <li>
            <Link onClick={tokenRemove} to="/login">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="navbar">
        <div className="nav-logo">MyApp</div>
        <ul className="nav-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;


