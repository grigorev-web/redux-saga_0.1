import React from "react";
import Post from "./Post";

export default ({ posts }) => {
  if (!posts.length) {
    return (
      <div>
        <p>Нет постов...</p>
        <div className="btn btn-primary">Згрузить</div>
      </div>
    );
  }
  return posts.map((post) => {
    return <Post post={post} key={post} />;
  });
};
