
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';


import Navbar from './components/navbar';
import Main from './components/main';
import Comment from './components/comment';


class App extends React.Component{

  render() {
    return (
      // <div className="container">
      //   <Navbar />
      //   <Main />
      // </div>
      <div className="container">
        <Navbar />
        <Router history={hashHistory}>
          <Route path="/" component={Main}/>
          <Route path="/comment" component={Comment} />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
