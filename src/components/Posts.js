import React from "react";
import { connect } from "react-redux";
import Post from "./Post";

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p>Нет постов...</p>;
  }
  return syncPosts.map((post) => {
    return <Post post={post} key={post} />;
  });
};

const mapStateToProps = (state) => {
  return {
    syncPosts: state.posts.posts
  };
};
export default connect(mapStateToProps, null)(Posts);
