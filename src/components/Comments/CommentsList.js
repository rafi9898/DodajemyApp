import React, { Component } from "react";
import Comment from "./Comment";
import { Container, Row, Col } from "react-bootstrap";
import "./Comments.css";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faArrowCircleUp
} from "@fortawesome/free-solid-svg-icons";

class CommentsList extends Component {
  state = {
    active: 1
  };

  setCurrentPage = e => {
    const type = e.target.id;
    let currentPage = this.state.active;
    switch (type) {
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
    const { comments, postId } = this.props;
    const currentComments =
      comments &&
      comments.filter(comment => {
        return comment.postId === postId;
      });

    const comment =
      currentComments &&
      currentComments.slice(0, this.state.active * 2).map(comment => {
        return <Comment key={comment.id} comment={comment} />;
      });

    const totalPage = Math.ceil(currentComments && currentComments.length / 2);
    const pagination =
      currentComments && currentComments.length > 2 ? (
        totalPage === this.state.active ? (
          <FontAwesomeIcon
            onClick={this.setCurrentPage}
            id="hide"
            className="comments-arrow"
            icon={faArrowCircleUp}
          />
        ) : (
          <FontAwesomeIcon
            onClick={this.setCurrentPage}
            id="more"
            className="comments-arrow"
            icon={faChevronCircleDown}
          />
        )
      ) : null;

    return (
      <div className="comments-list-box">
        <Container>
          <Row>
            <Col className="text-left" md="12">
              <h2 className="section-title">Komentarze</h2>
            </Col>
          </Row>
          {comment}
          <div className="text-center">{pagination}</div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const comments = state.firestore.ordered.comments;
  return {
    comments
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "comments", orderBy: [["createdAt", "desc"]] }
  ])
)(CommentsList);
