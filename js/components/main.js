import React from 'react';
import { Link } from 'react-router';

export default class Main extends React.Component {

  render() {

    return(
      <main className="main">

        <h2>HOME</h2>

        <ul className="navigation">
          <li><Link to="/projects">Projekte</Link></li>
          <li><Link to="/about">Über uns</Link></li>
        </ul>

      </main>
    );
  }
}
