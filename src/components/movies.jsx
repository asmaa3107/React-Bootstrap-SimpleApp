import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";


class MoviesComp extends Component {
  state = {
    movies: getMovies()
  };
  render() {
    return (
      <div className="container">
        <div className="jumbotron text-center">
          <div className="container  ">
            <h1 className="jumbotron-heading">E-COMMERCE CART</h1>
          </div>
        </div>

        <div className="container mb-4 ">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col"> </th>
                      <th scope="col">Product</th>
                      <th scope="col">Available</th>
                      <th scope="col" className="text-center">
                        Quantity
                      </th>
                      <th scope="col" className="text-right">
                        Price
                      </th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.movies.map(m => (
                      <tr key={m._id}>
                        <td>
                          <img src="https://dummyimage.com/50x50/55595c/fff" />{" "}
                        </td>
                        <td key={m._id}>{m.title}</td>
                        <td>In stock</td>
                        <td>
                          <input className="form-control" type="text" />
                        </td>
                        <td className="text-right">124,90 €</td>
                        <td className="text-right">
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => this.confirmDelete(m._id)}
                          >
                           <span className="fa fa-trash-o"></span>{"  "}
                           delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col mb-2">
              <div className="row">
                <div className="col-sm-12  col-md-6">
                  <button className="btn btn-block btn-light">
                    Continue Shopping
                  </button>
                </div>
                <div className="col-sm-12 col-md-6 text-right">
                  <button className="btn btn-lg btn-block btn-success text-uppercase">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  confirmDelete = id => {
    debugger;

    let obj = this.state.movies.filter(m => m._id === id);
    let newOj = this.state.movies;
    if (newOj.indexOf(obj) > -1) newOj.slice(newOj.indexOf(obj), 1);
    console.log(obj);
    console.log(newOj);

    // obj.pop();
    // this.setState({ movies: obj });
  };
} //* end of  class

export default MoviesComp;
