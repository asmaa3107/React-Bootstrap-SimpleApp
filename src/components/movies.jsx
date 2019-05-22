import React, { Component } from "react";
import { toast } from "react-toastify";
import { getMovies, deleteMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import Pagination from "./comman/pagination";
import Grouping from "./comman/grouping";
import MoviesTable from "./moviesTable";
import { Link } from "react-router-dom";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchBox from "./searchBox";
class MoviesComp extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "genre.name", order: "asc" },
    genres: [],
    searchQuery: "",
    selectedGenre: null,
    selectedItem: []
  };
  async componentDidMount() {
    const { data } = await getGenres();
    const genres = [{ _id: "", name: "All Genres" }, ...data];
    const { data: movies } = await getMovies();
    this.setState({ movies, genres });
  }
  confirmDelete = async movie => {
    const orignalMovies = this.state.movies;
    const updated_movielist = orignalMovies.filter(m => m._id !== movie._id);

    this.setState({ movies: updated_movielist });
    try {
    await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("this movie has already been deleted");
      }
      this.setState({ movies: updated_movielist });
    }
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
    this.setState({ selectedGenre: genre, currentPage: 1 }); //nsole.log(genre);
  };
  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
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
      searchQuery,
      currentPage,
      sortColumn,
      movies: allMovies
    } = this.state;
    //filtering
    let filterd = allMovies;
    if (searchQuery)
      filterd = allMovies.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filterd = allMovies.filter(m => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filterd, [sortColumn.path], [sortColumn.order]);
    const { length: count } = filterd;

    //paging
    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: count, data: movies };
  };
  render() {
    const {
      pageSize,
      selectedGenre,
      currentPage,
      sortColumn,
      searchQuery
    } = this.state;
   const {user} = this.props;
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
                <div>
                  {user && (<Link
                    to={`/movies/new`}
                    className=" btn btn-default btn-outline-primary mb-2"
                  > 
                    <i className="fa fa-plus mr-1" />
                    Add Movie
                  </Link>)} 
                </div>
                {count === 0 ? (
                  <p>No Movies Here </p>
                ) : (
                  <p>we have {totalCount} Movies .. Enjoy!</p>
                )}
                <SearchBox value={searchQuery} onChange={this.handleSearch} />
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
