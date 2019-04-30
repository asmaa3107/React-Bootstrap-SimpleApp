import React from "react";
import ReactJoiValidations from "react-joi-validation";
import Joi from "joi-browser";
import Form from "./comman/form";
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
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
    // .min(8)
  };

  doSubmit = () => {
    //call server;
    console.log("sumited");
  };

  render() {
    const { username, password } = this.state.data;
    const { errors } = this.state;
    return (
      <React.Fragment>
        <div className="container text-center w-50">
          <form className="text-left" onSubmit={this.handleSubmit}>
            {this.renderInput("username", "User name")}
            {this.renderInput("password", "Password","password")}
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
