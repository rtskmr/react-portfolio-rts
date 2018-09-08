import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import login from './components/login';
import home from './components/home';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">RTS</a>
            </div>
            <ul className="nav navbar-nav">
       {//      <li className="active"><a href="">Home</a></li>
          //    <li className="active"><a href="#">Resume</a></li>
         //     <li className="active"><a href="#">Experiences</a></li>
         //     <li className="active"><a href="#">Contact</a></li>
        }
        

            </ul>
          </div>
        </nav>
        <div className="container-fluid text-left pageLeftSidePanel">
        <div className="row content">
          <div className="col-sm-2 sidenav leftPanelHeading">
            <p><a href="#">Link</a></p>
            <p><a href="#">Link</a></p>
            <p><a href="#">Link</a></p>
            <p><a href="#">Link</a></p>
            <p><a href="#">Link</a></p>
            <p><a href="#">Link</a></p>
            <p><a href="#">Link</a></p>
            <p><a href="#">Link</a></p>
            <p><a href="#">Link</a></p>
            <p><a href="#">Link</a></p>
            <p><a href="#">Link</a></p>
            <p><a href="#">Link</a></p>
            <p><a href="#">Link</a></p>
            <p><a href="#">Link</a></p>
            <p><a href="#">Link</a></p>
          </div>
        </div>
      </div>

      <footer className="container-fluid text-center">

    </footer>
      </div>

    );
  }
}

export default App;
