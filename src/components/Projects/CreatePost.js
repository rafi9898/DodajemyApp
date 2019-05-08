import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CodeMirror from "react-codemirror";
import "../../../node_modules/codemirror/lib/codemirror.css";
import "./Post.css";
import { connect } from "react-redux";
import { createPost } from "../../store/actions/postActions";
import { Redirect } from "react-router-dom";

class CreatePost extends Component {
  state = {
    postTitle: "",
    postContent: "",
    postType: "PUBLICZNY"
  };

  setPostData = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  setPostContent = e => {
    this.setState({
      postContent: e
    });
  };

  createNewPost = e => {
    e.preventDefault();
    this.props.createPost(this.state);
    this.props.history.push("/dashboard");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <section className="new-post">
        <Container>
          <Form onSubmit={this.createNewPost}>
            <Row>
              <Col md="12">
                <Form.Control
                  onChange={this.setPostData}
                  className="title-input"
                  size="lg"
                  type="text"
                  id="postTitle"
                  placeholder="Tytuł"
                  required
                />
              </Col>
            </Row>
            <CodeMirror
              onChange={this.setPostContent}
              id="postContent"
              required
              className="code-editor"
              options={{ lineNumbers: true }}
            />
            <Row>
              <div className="post-controls text-center">
                <p className="text-center title-type-post">Wybierz typ posta</p>
                <Form.Control
                  onChange={this.setPostData}
                  id="postType"
                  required
                  className="text-center post-type-field"
                  as="select"
                >
                  <option>PUBLICZNY</option>
                  <option>PRYWATNY</option>
                </Form.Control>
                <Button
                  className="create-post-btn"
                  type="submit"
                  variant="success"
                >
                  DODAJ WPIS
                </Button>
              </div>
            </Row>
          </Form>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);
