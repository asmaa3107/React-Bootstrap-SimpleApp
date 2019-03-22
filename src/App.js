import React, {
  Component
} from 'react';
import './App.scss';
 import  MoviesComp from './components/movies';
class App extends Component {

  render() {
    return ( 
      <main className="container">
      <MoviesComp/>
      </main>
    );
  }

  
}

export default App;