import React from "react";
import Post from "./Post";

export default ({ posts }) => {
  if (!posts.length) {
    return <p>Нет постов...</p>;
  }
  return posts.map((post) => {
    return <Post post={post} key={post} />;
  });
};
