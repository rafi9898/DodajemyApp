import React from "react";
import Comment from "./Comment";
import { Container, Row, Col } from "react-bootstrap";
import "./Comments.css";

const CommentsList = () => {
  return (
    <div className="comments-list-box">
      <Container>
        <Row>
          <Col className="text-left" md="12">
            <h2 className="section-title">Komentarze</h2>
          </Col>

          <Comment />
        </Row>
      </Container>
    </div>
  );
};

export default CommentsList;
