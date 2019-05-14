import React from "react";
import ReactJoiValidations from "react-joi-validation";
import Joi from "joi-browser";
import Form from "./comman/form";
import * as authService from "../services/authService";

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
      const { data: jwt } = await authService.login(
        data.username,
        data.password
      );
      //get JWT
      localStorage.setItem("token", jwt);
      this.props.history.push("/");
      // console.log(jwt);
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
    const { username, password } = this.state.data;
    const { errors } = this.state;
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
