
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';


import Navbar from './components/navbar';
import Main from './components/main';
import About from './components/about';

import Projekte from './components/projects';
import Rewe from './components/rewe';
import Provinzial from './components/provinzial';
import NavLink from './modules/NavLink.js';


class App extends React.Component{

  render() {
    return (
      <div className="container">
        <Router history={hashHistory}>
          <Route path="/" component={Main}/>
          <Route path="/projects" component={Projekte}>
            <Route path="/rewe" component={Rewe} />
            <Route path="/provinzial" component={Provinzial} />
          </Route>
          <Route path="/about" component={About} />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
