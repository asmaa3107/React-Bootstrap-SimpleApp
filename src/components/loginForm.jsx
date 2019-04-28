import React, { Component } from "react";
import Input from "./comman/input";

class LoginForm extends Component {
//data in form should has a default value
  state = {
    account: {
      username: "",
      password: ""
    },
    errors:{}
    
    //   errors: {
    //   username: "",
    //   password: ""
    // }
  };
  handleChange = ({currentTarget:input}) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  handleSubmit = e => {
    e.preventDefault();
    const errors= this.validate();
    console.table(errors);
    console.log("submitted");
  };
 validate = () =>{
  const errors={};
  const {account}=this.state;
  if (account.username.trim() === '') {
    errors.username='username is required';
  }  
   if (account.password.trim() === '') {
    errors.password='password is required';
  } 

  return Object.keys(errors).length === 0 ? null : errors
  
};
  render() {
    const {username,password}=this.state.account;
    const {errors}=this.state;
    return (
      <React.Fragment>
        <div className="container text-center w-50">
          <form className="text-left" onSubmit={this.handleSubmit}>
         <Input 
         name="username"
         lable="User Name"  error="jkjkjkjk"
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
