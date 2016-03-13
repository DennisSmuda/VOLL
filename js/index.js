
import React from 'react';
import ReactDOM from 'react-dom';


import Navbar from './components/navbar';


class App extends React.Component{

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="comment-box">
          <h2>Hello I am Comment Box</h2>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
