import React, { Component } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { createComment } from "../../store/actions/commentActions";

class CreateComment extends Component {
  state = {
    content: "",
    postId: ""
  };

  setContentHandler = e => {
    this.setState({
      content: e.target.value,
      postId: this.props.postId
    });
  };

  addNewComment = e => {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({
      content: "",
      postId: ""
    });
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <p>Zaloguj się aby dodać komentarz!</p>;
    return (
      <Form onSubmit={this.addNewComment} className="create-post-form">
        <Col md="12" className="text-left">
          Dodaj swój komentarz:
        </Col>
        <Col md="12">
          <Form.Control
            onChange={this.setContentHandler}
            value={this.state.content}
            as="textarea"
            rows="3"
            required
          />
        </Col>
        <Col className="text-left" md="12">
          <Button type="submit" className="add-com-btn" variant="success">
            Dodaj
          </Button>
        </Col>
      </Form>
    );
  }
}

const mapStateToProps = (state, ownState) => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createComment: comment => dispatch(createComment(comment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateComment);
