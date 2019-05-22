import React from "react";
import ReactJoiValidations from "react-joi-validation";
import Joi from "joi-browser";
import Form from "./comman/form";
import authService from "../services/authService";
import {  Redirect } from "react-router-dom";

ReactJoiValidations.setJoi(Joi);

class LoginForm extends Form {
  //data in form must  has a default value
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {}
  };
  //in future only thing I should change is the schema
  schema = {
    username: Joi.string()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
    // .min(8)
  };

  doSubmit = async () => {
    //call server;
    try {
      const { data } = this.state;
      await authService.login(data.username, data.password);
      const { state:lastUrl } = this.props.location;
      //reload whole page
      window.location = lastUrl ? lastUrl.from.pathname : "/";
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
   if(authService.getCurrentUser()) return <Redirect to="/" />
    return (
      <React.Fragment>
        <div className="container text-center w-50">
          <form className="text-left" onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("login")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;

// if (name === "username") {
//   if (value.trim() === "") {
//     return "username is required";
//   }
// }
// if (name === "password") {
//   if (value.trim() === "") {
//     return "password is required";
//   }
// }
//  return Object.keys(errors).length === 0 ? null : errors;

// const { data } = this.state;
// const errors = {};
// if (data.username.trim() === "") {
//   errors.username = "username is required";
// }
// if (data.password.trim() === "") {
//   errors.password = "password is required";
// }
// return Object.keys(errors).length === 0 ? null : errors;
