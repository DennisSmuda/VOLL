import React from 'react';
import { Link } from 'react-router';
import TransitionGroup from 'react-addons-css-transition-group';

export default class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: ['Hello', 'World', 'click', 'fajkdssklj'],
    };
  }

  handleAdd() {
    var newItems = this.state.items.concat([prompt('Enter some Text')]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    var newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {

    var items = this.state.items.map(function(item, i) {
      return (
        <div key={item} onClick={this.handleRemove.bind(this, i)}>
          {item}
        </div>
      );
    }.bind(this));

    return(
      <main className="about">
        <h1>Über uns</h1>

        <div>
          <div className="ui-container">
            <input />
            <button onClick={this.handleAdd.bind(this)}>Add Item</button>
          </div>
          <TransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {items}
        </TransitionGroup>
       </div>

        <Link className="link" to="/">Zurück</Link>
      </main>
    );
  }
}
