import React from "react";
import Comment from "./Comment";
import { Container, Row, Col } from "react-bootstrap";
import "./Comments.css";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const CommentsList = props => {
  const { comments, postId } = props;
  const currentComments =
    comments &&
    comments.filter(comment => {
      return comment.postId === postId;
    });

  const comment =
    currentComments &&
    currentComments.map(comment => {
      return <Comment key={comment.id} comment={comment} />;
    });

  return (
    <div className="comments-list-box">
      <Container>
        <Row>
          <Col className="text-left" md="12">
            <h2 className="section-title">Komentarze</h2>
          </Col>
        </Row>
        {comment}
      </Container>
    </div>
  );
};

const mapStateToProps = state => {
  const comments = state.firestore.ordered.comments;
  return {
    comments
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "comments" }])
)(CommentsList);
