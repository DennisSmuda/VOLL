import React from 'react';
import { Link } from 'react-router';

export default class Provinzial extends React.Component {
  render() {
    return (
      <div className="project provinzial">
        <h1>Provinzial</h1>
        <Link to="/projects">Zurück zu den Projekten</Link>
      </div>
    );
  }
}
