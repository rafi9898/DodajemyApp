import React, { Component } from "react";
import { Col, Form, Button } from "react-bootstrap";

class CreateComment extends Component {
  render() {
    return (
      <Form className="create-post-form">
        <Col md="12" className="text-left">
          Dodaj swój komentarz:
        </Col>
        <Col md="12">
          <Form.Control as="textarea" rows="3" required />
        </Col>
        <Col className="text-left" md="12">
          <Button className="add-com-btn" variant="success">
            Dodaj
          </Button>
        </Col>
      </Form>
    );
  }
}

export default CreateComment;
