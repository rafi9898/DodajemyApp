import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PostList from "../Projects/PostList";
import { connect } from "react-redux";
import "./Layout.css";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
  render() {
    const { auth, posts, profile } = this.props;
    const myPosts =
      posts &&
      posts.filter(post => {
        return post.authorId === auth.uid;
      });

    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <section className="dashboard">
        <Container className="search-box">
          <h2
            className="text-center title-dashboard"
            style={{ fontSize: "1.4rem" }}
          >
            Witaj użytkowniku: {profile.firstName} {profile.lastName}
          </h2>
          <PostList posts={myPosts} />
        </Container>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(Dashboard);
