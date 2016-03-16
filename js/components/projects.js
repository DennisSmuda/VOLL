import React from 'react';
import { Link } from 'react-router';
import NavLink from '../modules/NavLink';

export default class Projects extends React.Component {

  render() {


    return(

      <main className="projects">
        <h2>Projekte</h2>
        <ul className="navigation">
          <li><NavLink to="/" >Home</NavLink></li>
          <li><NavLink to="/rewe">Rewe</NavLink></li>
          <li><NavLink to="/provinzial">Provinzial</NavLink></li>
        </ul>

        {this.props.children}
      </main>
    );
  }
}
