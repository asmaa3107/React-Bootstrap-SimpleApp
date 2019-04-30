import React from "react";
import ReactJoiValidations from "react-joi-validation";
import Joi from "joi-browser";

import Form from "./comman/form";
ReactJoiValidations.setJoi(Joi);

class MovieDetails extends Form {
  state = {
    data: {
      title: "",
      password: "",
      name: ""
    },
    errors: {}
  };
  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
      .min(5),
    name: Joi.string()
      .required()
      .label("Username")
  };
  handleSave = () => {
    this.props.history.push("/movies");
  };
  render() {
    const { id } = this.props.match.params;
    const { username, password, name } = this.state.data;
    const { errors } = this.state;
    return (
      <React.Fragment>
        <div>
          <h1>movie details</h1>
          <p>movie id : {id}</p>
         
        </div>
        <div className="w-50">
          <form className="text-left" onSubmit={this.handleSubmit}>
            {this.renderInput("username", "User name", "email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("name", "Full Name", "text")}
            {this.renderButton("Add Movie")}
          </form>
     {/*      <input
            name=""
            id=""
            className="btn btn-primary"
            type="button"
            value="save"
            onClick={this.handleSave}
          /> */}
        </div>
      </React.Fragment>
    );
  }
}

export default MovieDetails;
