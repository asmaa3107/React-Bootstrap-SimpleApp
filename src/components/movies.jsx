import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class MoviesComp extends Component {
  state = {
    movies: getMovies()
  };

  confirmDelete = movie => {
    const updated_movielist = this.state.movies.filter(
      m => m._id !== movie._id
    );
    this.setState({ movies: updated_movielist });
    // console.log(movie);
  };

  render() {
    //es6 parameter destracting
    const { length: count } = this.state.movies;
    // if(count === 0) return <p>No movies for now</p>
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
                {/**we use short if to render if condition in jsx */}
                {count === 0 ? (
                  <p>No Movies Here </p>
                ) : (
                  <p>we have {count} Movies .. Enjoy!</p>
                )}
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col"> </th>
                      <th scope="col">Product</th>
                      <th scope="col">Available</th>
                      <th scope="col" className="text-center">
                        Likes
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
                        <td>{m.title}</td>
                        <td>In stock</td>
                        <td>
                          <i className="fa fa-heart-o text-danger" aria-hidden="true"></i>
                          <i className="fa fa-heart text-danger" aria-hidden="true"></i>
                        </td>
                        <td className="text-right">124,90 €</td>
                        <td className="text-right">
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => this.confirmDelete(m)}
                          > 
                            <span className="fa fa-trash-o" />
                            
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
} //* end of  class

export default MoviesComp;
