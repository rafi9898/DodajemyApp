import React, { Component } from "react";
import { Container, Row, Table } from "react-bootstrap";
import Search from "../SearchBox/Search";
import PostItem from "./PostItem";
import "./Post.css";

class PostList extends Component {
  state = {
    currentPosts: [],
    active: 1,
    showCurrentPost: false
  };

  updateListHandler = e => {
    const currentPage = parseInt(e.target.firstChild.data);
    this.setState({
      active: currentPage
    });
  };

  findUniPost = name => {
    if (name.length > 0) {
      const currentPostName = name.toLowerCase();
      const posts = this.props.posts;
      const currentPosts = posts.filter(post => {
        return (
          post.authorFirstName.toLowerCase().includes(currentPostName) ||
          post.postTitle.toLowerCase().includes(currentPostName)
        );
      });

      this.setState({
        currentPosts,
        showCurrentPost: true
      });
    } else {
      this.setState({
        showCurrentPost: false
      });
    }
  };

  render() {
    const items = !this.state.showCurrentPost
      ? this.props.posts &&
        this.props.posts
          .slice((this.state.active - 1) * 5, this.state.active * 5)
          .map(post => {
            return <PostItem key={post.id} post={post} />;
          })
      : this.state.currentPosts
          .slice((this.state.active - 1) * 5, this.state.active * 5)
          .map(post => {
            return <PostItem key={post.id} post={post} />;
          });

    return (
      <Container>
        <Search currentName={this.findUniPost} />
        <Row>
          <Table className="text-center" striped bordered hover>
            <thead>
              <tr>
                <th>Data</th>
                <th>Tytuł</th>
                <th>Dodał</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>{items}</tbody>
          </Table>
        </Row>
      </Container>
    );
  }
}

export default PostList;
