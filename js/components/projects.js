import React from 'react';
import { Link, IndexLink, browserHistory, router } from 'react-router';
import NavLink from '../modules/NavLink';

export default class Projects extends React.Component {

  constructor(props) {
    super(props);

    // Bind functions
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const project     = event.target.elements[0].value;
    const subproject  = event.target.elements[1].value;
    const path        = `/projects/${project}/${subproject}`;
    browserHistory.push(path);
  }

  render() {
    return(

      <main className="projects">
        <h2>Projekte</h2>
        <ul className="navigation">
          <li><IndexLink to="/" >Home</IndexLink></li>
          <li><NavLink to="/projects/rewe">Rewe</NavLink></li>
          <li><NavLink to="/projects/provinzial">Provinzial</NavLink></li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="User Name" /> / {' '}
              <input type="text" placeholder="Repo" /> / {' '}
              <button>Go</button>
            </form>
          </li>
        </ul>

        {this.props.children}
      </main>
    );
  }
}
