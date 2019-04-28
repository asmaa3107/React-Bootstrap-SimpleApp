import React, { Component } from "react";
import Input from "./comman/input";
import ReactJoiValidations from 'react-joi-validation'
import Joi from 'joi-browser' // or whatever Joi library you are using
  ReactJoiValidations.setJoi(Joi);
  var schema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().min(8).required()
  });
   
class LoginForm extends Component {
  //data in form must  has a default value
  state = {
    account: {
      username: "",
      password: ""
    },
    errors: {}
  };

  validate = () => {
    const { account } = this.state;
    const errors = {};
    if (account.username.trim() === "") {
      errors.username = "username is required";
    }
    if (account.password.trim() === "") {
      errors.password = "password is required";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };
  validatePtperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") {
        return "username is required";
      }
    }
    if (name === "password") {
      if (value.trim() === "") {
        return "password is required";
      }
    }
    //  return Object.keys(errors).length === 0 ? null : errors;
  };
  handleSubmit = e => {
    // debugger;
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    // console.table( errors);
    console.table(this.state.errors);
    console.log("submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMsg = this.validatePtperty(input);
    if (errorMsg) errors[input.name] = errorMsg;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { username, password } = this.state.account;
    const { errors } = this.state;
    return (
      <React.Fragment>
        <div className="container text-center w-50">
          <form className="text-left" onSubmit={this.handleSubmit}>
            <Input
              name="username"
              lable="User Name"
              error={errors.username}
              value={username}
              onChange={this.handleChange}
            />
            <Input
              name="password"
              error={errors.password}
              lable="Password"
              value={password}
              onChange={this.handleChange}
            />

            <button className="btn btn-primary">Login</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;
