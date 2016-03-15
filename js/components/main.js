import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({

  render: function() {


    return(

      <main className="main">

        <h2>Homepage</h2>
        <ul role="nav">
          <li><Link to="/comment">Comment</Link></li>
        </ul>

      </main>
    );
  }
});


export default Main;
