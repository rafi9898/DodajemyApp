import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PostList from "../Projects/PostList";
import "./Layout.css";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Home extends Component {
  render() {
    const { posts, auth } = this.props;
    const currenPost =
      posts &&
      posts.filter(post => {
        return post.postType === "PUBLICZNY";
      });
    if (!auth.uid) {
      return (
        <section className="home">
          <Container className="search-box" />
          <PostList posts={currenPost} />
        </section>
      );
    } else {
      return <Redirect to="/dashboard" />;
    }
  }
}

const mapStateToProps = state => {
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(Home);
