import React, {
  Component
} from 'react';
import {Route ,Switch,Redirect } from 'react-router-dom';
import './App.scss';
import  MoviesComp from './components/movies';
import Counters from './components/counters';

import Navbar  from "./components/navbar";
import MovieDetails from './components/movieDetails';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notfound';
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
      <Navbar   totalValues={this.state.counters.filter(c => c.value>0).length}     />
       <div className="jumbotron text-center">
          <div className="container  ">
            <h1 className="jumbotron-heading">E-COMMERCE CART</h1>
          </div>
        </div>
      <main className="container">
      <Switch>
            <Route path="/movies/:id" component={MovieDetails}  />
            <Route path="/movies" render={ props => <MoviesComp sortBy="newest" {...props}/> } />
            <Route path="/cutomers" component={Customers}/>
            <Route path="/rentals" component={Rentals}/>
            <Route path="/404" component={NotFound} />   
            <Route path="/" exact component={MoviesComp}/>
          <Redirect to="/404"/>
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