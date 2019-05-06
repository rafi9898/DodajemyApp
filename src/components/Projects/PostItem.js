import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/pl";

const PostItem = ({ post }) => {
  return (
    <tr>
      <td>{moment(post.createdAt.toDate()).calendar()}</td>
      <td>
        {post.postTitle.length > 27
          ? post.postTitle.substring(0, 27) + "..."
          : post.postTitle}
      </td>
      <td>
        {post.authorFirstName} {post.authorLastName}
      </td>
      <td>
        <Link to={{ pathname: `/posts/${post.id}`, state: { id: post.id } }}>
          ZOBACZ
        </Link>
      </td>
    </tr>
  );
};

export default PostItem;
