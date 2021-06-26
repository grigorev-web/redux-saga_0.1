import React from "react";
import Posts from "./Posts";

export default ({ post, id }) => {
  return (
    <div className="card m-1">
      <div className="card-body">
        <div className="card-title">Post here {post}</div>
      </div>
    </div>
  );
};
