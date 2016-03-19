import React from 'react';
import { Link } from 'react-router';

export default class Rewe extends React.Component {
  render() {
    return (
      <div className="project rewe">
        <h1>REWE is besfdsate</h1>
        <Link to="/projects">Zurück zu den Projekten</Link>
      </div>
    );
  }
}
