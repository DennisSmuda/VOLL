import React from 'react';
import { Link } from 'react-router';

import NavLink from '../modules/NavLink';

export default class Main extends React.Component {

  render() {

    return(
      <main className="main">

        <h2>HOME</h2>

        <ul className="navigation">
          <li><NavLink to="/projects">Projekte</NavLink></li>
          <li><NavLink to="/about">Über uns</NavLink></li>
        </ul>

      </main>
    );
  }
}
