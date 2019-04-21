import React, { Component } from "react";
import { timingSafeEqual } from "crypto";
import Input from "./comman/input";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: ""
    }
  };
  handleChange = ({currentTarget:input}) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("submitted");
  };
  render() {
    const {username,password}=this.state.account;
    return (
      <React.Fragment>
        <div className="container text-center w-50">
          <form className="text-left" onSubmit={this.handleSubmit}>
         <Input 
         name="username"
         lable="User Name" 
         value={username}
         onChange={this.handleChange}
         />
              <Input 
         name="password"
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
