import React from 'react';

export default class Navbar extends React.Component {
  render() {
    let navClass = 'nav nav--' + this.props.color;
    console.log('kjl');
    return(
      <nav className={navClass}>
        <h1>Navbar</h1>
      </nav>
    );
  }
}
