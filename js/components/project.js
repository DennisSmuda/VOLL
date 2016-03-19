import React from 'react';
import { Link } from 'react-router';


export default class Project extends React.Component {
  render() {
    return(
      <div className="project">
        <h1>{this.props.params.projectName}</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}
