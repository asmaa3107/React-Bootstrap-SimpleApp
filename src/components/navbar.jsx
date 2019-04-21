import React from "react";
import { Link, NavLink } from "react-router-dom";
import LoginForm from "./loginForm";

//child view
//stateless commponent
const Navbar = props => {
  const { totalValues } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand"> M.Movies</NavLink>
        <button
          className="navbar-toggler float-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbar9"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="navbar-collapse collapse" id="navbar9">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink  className="nav-link"  to="/movies">Movies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink  className="nav-link"  to="/cutomers">Cutomers</NavLink>
            </li>
             <li className="nav-item">
              <NavLink  className="nav-link"  to="/rentals">Rentalls</NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-shopping-cart" />
                <span className="badge badge-pill badge-secondary mx-1">
                  {totalValues}
                </span>
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link" >
                login <i className="fa fa-sign-in" aria-hidden="true" />
              </Link>
            </li>
             <li className="nav-item">
              <a className="nav-link" href="#">
                Logout <i className="fa fa-sign-out" aria-hidden="true" />
              </a>
            </li>
         
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
