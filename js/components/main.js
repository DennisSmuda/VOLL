import React from 'react';
import  $ from 'jquery';
import Item from './item.js';

var Firebase = require('firebase');
var fireref = new Firebase('https://hacker-news.firebaseio.com/v0/');
var itemRef;

let topstories = [];
let topIDs = [];


function include(arr,obj) {
    return (arr.indexOf(obj) != -1);
}


const Main = React.createClass({

  getInitialState: function() {
    return {
      posts: [],
      topstories: [],
      count: 5
    };
  },

  componentWillMount: function() {
    // this.fetchLatestNews();
    this.fetchTopStories();

  },

  componentDidMount: function() {
    // this.fetchTopStories();
  },

  fetchTopStories: function() {
    fireref.child("topstories").on("value", function(snapshot) {
      // Get ids of topstories
      let topstoryIds = snapshot.val();
      console.log('TOPSTORY UPDATE');
      console.log(topstories);

      this.setState({posts: topstoryIds});


      snapshot.forEach(function(childSnapshot) {
        var key = childSnapshot.key();
        // Topstory IDs
        var id = childSnapshot.val();

        // Map to item/id - api call
        itemRef = fireref.child('item').child(id);
        // Manage data
        itemRef.on('value', function(itemSnapshot){
          let post = itemSnapshot.val();

          let postID = post.id;
          topstories.forEach(function(topstory, i, arr) {
            topIDs[i] = topstory.id;
            // console.log(topIDs);
          });

          var result = include(topIDs, postID);

          if (!result) {
            topstories.push(post);
            this.setState({topstories: topstories});
          } else {
            console.log('object exists');
          }


        }.bind(this));
      }.bind(this));
    }.bind(this));
  },

  componentWillUnmount: function() {
    itemRef.off();
    fireref.off();
  },

  render: function() {


    return(
      <main className="main">

        <ol className="top-posts">


          {/*for (var i = 0; i < this.state.topstories.length; i++) {
            <Item post={this.state.topstories[i] />}
          }*/}
          {this.state.topstories.map(function(post) {
            return <Item key={post.id} post={post} />
          })}
        </ol>
      </main>
    );
  }
});


export default Main;
