import React from "react";
import { Link, NavLink } from "react-router-dom";
// import LoginForm from "./loginForm";

//child view
//stateless commponent
const Navbar = ({ totalValues, user }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
    
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          M.Movies
        </NavLink>
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
              <NavLink className="nav-link" to="/movies">
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cutomers">
                Cutomers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/rentals">
                Rentalls
              </NavLink>
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
            </li>
            {/*  {!user && <span>register</span>}
            {user && <span>welcome {user.name}</span>}
            {user != null ? (<span>hello</span>):(<span>login</span>)}
            */}
           
			 {user && (
              <React.Fragment>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    {/* {user.map(u => (<span>u.name</span>))} */}
                    {user.name}
                    <i className="fa fa-user-circle-o" aria-hidden="true" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/logout" className="nav-link">
                    logout <i className="fa fa-sign-out" aria-hidden="true" />
                  </Link>
                </li>
              </React.Fragment>
            )}

            {!user && (
              <React.Fragment>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Create Account
                    <i className="fa fa-sign-in" aria-hidden="true" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    login <i className="fa fa-sign-in" aria-hidden="true" />
                  </Link>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
