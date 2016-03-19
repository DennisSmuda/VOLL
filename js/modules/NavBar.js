import React from 'react';

export default class Navbar extends React.Component {
  render() {
    let navClass = 'nav nav--' + this.props.color;
    return(
      <nav className={navClass}>
        <h1>Navbar</h1>
      </nav>
    );
  }
}
