import React from "react";
import ReactJoiValidations from "react-joi-validation";
import Joi from "joi-browser";
import * as userService from "../services/usersService";
import * as authService from "../services/authService";
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
      .label("Email Adress"),
    password: Joi.string()
      .required()
      .label("Password")
      .min(5),
    name: Joi.string()
      .required()
      .label("Username")
  };
  doSubmit = async () => {
    try {
      await userService.register(this.state.data);
      console.log("registerd");
    } catch (ex) {
      //handle Client Error (user enter wrong or duplicted data ) 400 status
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const { username, password, name } = this.state.data;
    const { errors } = this.state;
    return (
      <React.Fragment>
        <div className="container text-center w-50">
          <form className="text-left" onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Email Adress", "email")}
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
