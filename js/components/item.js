import React from 'react';
import { Link } from 'react-router';

var Item = React.createClass({
  render: function() {
    var post = this.props.post;

    return (
      <li className="item">
        <div className="item__score">{post.score}</div>
        {/*<a className="item__link" href={post.url}>{post.title}</a>*/}
        <Link to="/comment" className="item__link">{post.title}</Link>
        <span className="item__author">{post.by}</span> <br/>

        <span className="item__comments">{post.num_comments}</span>

      </li>
    );
  }
});

module.exports = Item;
