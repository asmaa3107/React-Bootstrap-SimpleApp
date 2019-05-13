import React from "react";
import ReactJoiValidations from "react-joi-validation";
import Joi from "joi-browser";
import Form from "./comman/form";
import { getMovie, saveMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
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

  async populateGenres() {
    const { data: genres } = await getGenres();
    this.setState({ genres });
  }

  async populateMovie() {
    try {
      const movieId = this.props.match.params.id;
      if (movieId === "new") return;

      const { data: movie } = await getMovie(movieId);
      this.setState({ data: this.mapToViewModel(movie) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/404");
    }
  }

  async componentDidMount() {
    await this.populateGenres();
    await this.populateMovie();
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  }
  doSubmit = async () => {
    await saveMovie(this.state.data);
    this.props.history.push("/movies");
  };
  render() {
    const { id } = this.props.match.params;
    const { genres } = this.state;
    return (
      <React.Fragment>
        <div>
          <h1>movie details</h1>
          <p>movie id : {id}</p>
        </div>
        <div className="w-50">
          <form className="text-left" onSubmit={this.handleSubmit}>
            {this.renderInput("title", "Movie Name")}
            {this.renderSelect("genreId", "Genre", genres)}
            {this.renderInput("numberInStock", "numberInStock", "number")}
            {this.renderInput("dailyRentalRate", "Rate", "number")}
            {this.renderButton("Save Movie")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieDetails;
