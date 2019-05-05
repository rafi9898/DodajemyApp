import React from "react";
import { Col } from "react-bootstrap";
import "./Comments.css";

const Comment = () => {
  return (
    <Col className="comment-main-box" md="12">
      <div className="comment text-left">
        <div className="avatar">
          <span>RP</span>
        </div>

        <Col md="12" className="comment-content-box">
          <p className="content">Bardzo dobrze napisany kod ;)</p>
          <p>
            <span className="post-author">Rafał Podraza - wysłano 14:21</span>
          </p>
        </Col>
      </div>
    </Col>
  );
};

export default Comment;
