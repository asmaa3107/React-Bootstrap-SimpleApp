import React from "react";
import ReactJoiValidations from "react-joi-validation";
import Joi from "joi-browser";
import Form from "./comman/form";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
ReactJoiValidations.setJoi(Joi);

class MovieDetails extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    genres: [],
    errors: {}
  };
  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Movie Name"),
    genreId: Joi.string().required(),
    numberInStock: Joi.number()
      .integer()
      .min(0)
      .max(100),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
  };
  componentDidMount() {
    //bind all genres
    const genres = getGenres();
    this.setState({ genres });

    //get Movie _id
    const { id } = this.props.match.params;
    if (id === "new") return;

    //get Movie by id
    const movie = getMovie(id);
    // console.table(movie);
    if (!movie) return this.props.history.replace("/404");

    this.setState({ data: this.getMovieObj(movie) });
  }
  getMovieObj(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  }

  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };
  render() {
    const { id } = this.props.match.params;
    const { title, genreId, numberInStock, dailyRentalRate } = this.state.data;
    const { errors, genres } = this.state;
    return (
      <React.Fragment>
        <div>
          <h1>movie details</h1>
          <p>movie id : {id}</p>
        </div>
        <div className="w-50">
          <form className="text-left" onSubmit={this.handleSubmit}>
            {this.renderInput("title", "Movie Name")}
            {this.renderSelect("genreId", "Genre",this.state.genres)}
            {this.renderInput("numberInStock", "numberInStock", "number")}
            {this.renderInput("dailyRentalRate", "Rate", "number")}
            {this.renderButton("Add Movie")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieDetails;
