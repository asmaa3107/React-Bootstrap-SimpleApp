import React from "react";
import ReactJoiValidations from "react-joi-validation";
import Joi from "joi-browser";

import Form from "./comman/form";
ReactJoiValidations.setJoi(Joi);

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
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
  doSubmit = () => {
    console.log("registerd");
  };

  render() {
    const { username, password, name } = this.state.data;
    const { errors } = this.state;
    return (
      <React.Fragment>
        <div className="container text-center w-50">
          <form className="text-left" onSubmit={this.handleSubmit}>
            {this.renderInput("username", "User name", "email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("name", "Full Name", "text")}
            {this.renderButton("Register")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
