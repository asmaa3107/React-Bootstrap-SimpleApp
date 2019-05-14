import React, {Component} from 'react';
import {Route ,Switch,Redirect } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';  
import  jwtDecode from 'jwt-decode';
//---------------------------------------------
import './App.scss';
import  MoviesComp from './components/movies';
import Counters from './components/counters';

import Navbar  from "./components/navbar";
import MovieDetails from './components/movieDetails';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notfound';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import 'react-toastify/dist/ReactToastify.min.css';
class App extends Component { 
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value:4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  componentDidMount(){
    try {
      const jwt = localStorage.getItem('token');
      const user = jwtDecode(jwt);
      this.setState({user});
      console.table(user);
      
    } catch (error) {   }

  }
//  total = this.state.counters.filter(c=> c.value>0).length;  
  handelDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
    console.log("done delteing #", counterId);
  };
  handelIncreament = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    console.log(counter);
  };
  handelDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
    console.log(counter);
  }
  resetCounters = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState(counters);
    console.log("counters reset sucessfully");
  };

  render() {
    return ( 
    <React.Fragment>
      <ToastContainer />
      <Navbar
      userData={this.setState.user}
      totalValues={this.state.counters.filter(c => c.value>0).length} />
       <div className="jumbotron text-center">
          <div className="container  ">
            <h1 className="jumbotron-heading">E-COMMERCE CART</h1>
          </div>
        </div>
      <main className="container">
      <Switch>
            <Route path="/movies/:id"  component={MovieDetails}  />
            <Route path="/movies" render={ props => <MoviesComp sortBy="newest" {...props}/> } />
            <Route path="/cutomers" component={Customers}/>
            <Route path="/rentals" component={Rentals}/>
            <Route path="/login" component={LoginForm}/>
            <Route path="/register" component={RegisterForm}/>  
            <Route path="/404" component={NotFound} />   
          <Redirect from="/" exact to="/movies"/>
          <Redirect  to="/404"/>
      </Switch>
    
       <hr className="my-5" />
        <Counters
        counters={this.state.counters}
        onReset={this.resetCounters}
        onIncrement={this.handelIncreament}
        onDecrement={this.handelDecrement}
        onDelete={this.handelDelete}
        /> 

      </main>
   
      </React.Fragment>
    );
  }
 
}

export default App;