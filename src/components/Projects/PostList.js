import React, { Component } from "react";
import { Container, Row, Table, Button } from "react-bootstrap";
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

  changeActivePage = e => {
    let currentPage = this.state.active;
    switch (e.target.id) {
      case "more":
        this.setState({
          active: ++currentPage
        });
        break;
      case "hide":
        this.setState({
          active: 1
        });
        break;
      default:
        console.log("brak akcji");
    }
  };

  render() {
    const items = !this.state.showCurrentPost
      ? this.props.posts &&
        this.props.posts.slice(0, this.state.active * 5).map(post => {
          return <PostItem key={post.id} post={post} />;
        })
      : this.state.currentPosts.slice(0, this.state.active * 5).map(post => {
          return <PostItem key={post.id} post={post} />;
        });

    const postsNumber = !this.state.showCurrentPost
      ? this.props.posts && this.props.posts.length
      : this.state.currentPosts.length;
    const totalPage = Math.ceil(postsNumber / 5);
    const pagination =
      totalPage && totalPage < 2 ? null : (
        <div className="text-center">
          {this.state.active === totalPage ? (
            <Button
              onClick={this.changeActivePage}
              id="hide"
              variant="secondary"
            >
              SCHOWAJ
            </Button>
          ) : (
            <Button onClick={this.changeActivePage} id="more" variant="primary">
              WIĘCEJ
            </Button>
          )}
        </div>
      );

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
        {pagination}
      </Container>
    );
  }
}

export default PostList;
