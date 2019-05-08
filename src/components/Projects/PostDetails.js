import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CodeMirror from "react-codemirror";
import CommentsList from "../Comments/CommentsList";
import CreateComment from "../Comments/CreateComment";
import "../../../node_modules/codemirror/lib/codemirror.css";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import "./Post.css";

const PostDetails = props => {
  const { post, postId } = props;
  if (post) {
    return (
      <section className="post-details">
        <Container>
          <Row>
            <Col md="6">
              <h3 className="post-tile text-left">
                {post.postTitle.length > 27
                  ? post.postTitle.substring(0, 27) + "..."
                  : post.postTitle}
              </h3>
            </Col>

            <Col md="6">
              <h4 className="post-author text-right">
                Stworzony przez {post.authorFirstName} {post.authorLastName}
              </h4>
            </Col>

            <Col md="12">
              <div className="content-box">
                <CodeMirror
                  value={post.postContent}
                  className="code-editor text-left"
                  options={{
                    lineNumbers: true,
                    readOnly: true,
                    mode: "markdown"
                  }}
                />
              </div>
            </Col>

            <Col md="12">
              <CommentsList postId={postId} />
            </Col>

            <Col md="12">
              <CreateComment postId={postId} />
            </Col>
          </Row>
        </Container>
      </section>
    );
  } else {
    return (
      <Container>
        <Row>
          <Col md="12">
            <p className="text-center">Loading post...</p>
          </Col>
        </Row>
      </Container>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post: post,
    postId: id
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(PostDetails);
