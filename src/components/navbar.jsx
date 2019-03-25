import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <a href="/" className="navbar-brand">
            Bootstrap 4
          </a>
          <button
            className="navbar-toggler float-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbar9"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse" id="navbar9">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <i class="fas fa-shopping-cart" />
                <span class="badge badge-pill badge-secondary">
                  {this.props.totalValues}
                </span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
