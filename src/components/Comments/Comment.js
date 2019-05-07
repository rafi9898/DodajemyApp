import React from "react";
import { Col } from "react-bootstrap";
import "./Comments.css";
import moment from "moment";
import "moment/locale/pl";

const Comment = props => {
  const { comment } = props;
  return (
    <Col className="comment-main-box" md="12">
      <div className="comment text-left">
        <div className="avatar">
          <span>{comment.initials}</span>
        </div>

        <Col md="12" className="comment-content-box">
          <textarea readonly className="content" value={comment.content} />
          <p>
            <span className="post-author">
              {comment.authorFirstName} {comment.authorLastName} - [
              {moment(comment.createdAt.toDate()).calendar()}]
            </span>
          </p>
        </Col>
      </div>
    </Col>
  );
};

export default Comment;
