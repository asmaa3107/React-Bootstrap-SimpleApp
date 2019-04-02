import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./comman/like";
import Pagination from "./comman/pagination";
import Grouping from "./comman/grouping";
import { paginate } from "../utils/paginate";
class MoviesComp extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
 
  };
  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }
  confirmDelete = movie => {
    const updated_movielist = this.state.movies.filter(
      m => m._id !== movie._id
    );
    this.setState({ movies: updated_movielist });
    // console.log(movie);
  };
  handelLiked = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    //tooglelike
    movies[index].like = !movies[index].like;
    this.setState({ movies });
    // console.log(movie);
  };
  handelPageChange = page => {
    this.setState({ currentPage: page });
  };
  handelGenreSelect = genre => {
   this.setState({ selectedItem : genre});console.log(genre);
  };
  render() {
    //es6 parameter destracting
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedItem
    } = this.state;
    const movies = paginate(allMovies, currentPage, pageSize);
    // if(count === 0) return <p>No movies for now</p>
    return (
      <div className="container">
        <div className="container mb-4 ">
          <div className="row">
            <div className="col col-md-3 mt-5">
              <Grouping
                items={this.state.genres}
                selectedItem = {selectedItem}
                onItemSelect={this.handelGenreSelect}
              />
            </div>
            <div className="col-9">
              <div className="table-responsive">
                {/**we use short if to render if condition in jsx */}
                {count === 0 ? (
                  <p>No Movies Here </p>
                ) : (
                  <p>we have {count} Movies .. Enjoy!</p>
                )}
                <table className="table table-striped text-center">
                  <thead>
                    <tr>
                      <th scope="col"> </th>
                      <th scope="col">Product</th>
                      <th scope="col">Genres</th>
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
                    {movies.map(m => (
                      <tr key={m._id}>
                        <td>
                          <img src="https://dummyimage.com/50x50/55595c/fff" />{" "}
                        </td>
                        <td>{m.title}</td>
                        <td>{m.genre.name}</td>
                        <td>
                          <Like
                            Liked={m.like}
                            onClick={() => this.handelLiked(m)}
                          />
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
                <Pagination
                  itemsCount={count}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={this.handelPageChange}
                />
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
