import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./comman/pagination";
import Grouping from "./comman/grouping";
import MoviesTable from "./moviesTable";
import { Link } from "react-router-dom";
import { paginate } from "../utils/paginate";
import _ from "lodash";
class MoviesComp extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "genre.name", order: "asc" },
    genres: [],
    selectedItem: []
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
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
    this.setState({ selectedGenre: genre }); //nsole.log(genre);
  };
  handelSorting = sortColumn => {
    // debugger;
    this.setState({ sortColumn: sortColumn });
    //console.log(sortColumn);
  };

  getPagedData = () => {
    //es6 parameter destracting
    const {
      pageSize,
      selectedGenre,
      currentPage,
      sortColumn,
      movies: allMovies
    } = this.state;
    //filtering
    const filterd =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;
    const sorted = _.orderBy(filterd, [sortColumn.path], [sortColumn.order]);
    const { length: count } = filterd;

    //paging
    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: count, data: movies };
  };
  render() {
    const { pageSize, selectedGenre, currentPage, sortColumn } = this.state;
    const count = this.state.movies.length;
    const { totalCount, data } = this.getPagedData();
    return (
      <div className="container">
        <div className="container mb-4 ">
          <div className="row">
            <div className="col col-md-3 mt-5">
              <Grouping
                items={this.state.genres}
                selectedItem={selectedGenre}
                onItemSelect={this.handelGenreSelect}
              />
            </div>
            <div className="col-9">
              <div className="table-responsive">
                {/**we use short if to render if condition in jsx */}
                {count === 0 ? (
                  <p>No Movies Here </p>
                ) : (
                  <p>we have {totalCount} Movies .. Enjoy!</p>
                )}
                <div>
                  <Link
                    to={`/movies/:id`}
                    className=" btn btn-default btn-outline-primary mb-2"
                  >
                    <i class="fa fa-plus mr-1" />
                    Add Movie
                  </Link>
                </div>
                <MoviesTable
                  movies={data}
                  sortColumn={sortColumn}
                  onLike={this.handelLiked}
                  onDelete={this.confirmDelete}
                  onSort={this.handelSorting}
                />
                <Pagination
                  itemsCount={totalCount}
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
