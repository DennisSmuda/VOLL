
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import App from './containers/App';

import Navbar from './modules/Navbar';
import NavLink from './modules/NavLink.js';

import Home from './components/Home';
import About from './components/about';

import Projects from './components/Projects';
import Project from './components/Project';


class Index extends React.Component{

  render() {
    return (
      <Router history={ browserHistory }>
        <Route path="/">

          <IndexRoute component={App} />

          <Route path="/projects" component={Projects}>
            <Route path="/projects/:projectName" component={Project} />
          </Route>

          <Route path="/about" component={About} />
          <Route path="/about" component={About} />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
