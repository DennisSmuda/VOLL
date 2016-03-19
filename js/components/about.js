import React from 'react';
import { Link } from 'react-router';
import TransitionGroup from 'react-addons-css-transition-group';

export default class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return(
      <main className="about">
        <h1>Über uns</h1>

        <Link className="link" to="/">Zurück</Link>
      </main>
    );
  }
}
