import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import 'bootstrap/scss/bootstrap.scss';
import * as serviceWorker from './serviceWorker';
// import MoviesComp from './components/movies';

// library.add(FontAwesomeIcon) ;
ReactDOM.render( <App/> , document.getElementById('root'));
//  ReactDOM.render( <MoviesComp/> , document.getElementById('root'));
// ReactDOM.render( <Counters/> , document.getElementById('root'));
 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();