import React, { useContext } from "react";
import { BlogContext } from "../App";
import Card from "./Card";
import Spinner from "./Spinner";
const Blogs = () => {
  const { loading, posts, blog, relatedBlogs } = useContext(BlogContext);
  return (
    <div className="w-2/5 mx-auto flex flex-col gap-8">
      {blog ? (
        <>
          <Card key={blog.id} post={blog} />
          <h2 className="text-2xl font-black">Related Posts</h2>
          {relatedBlogs.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </>
      ) : loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <p>No posts found</p>
      ) : (
        posts.map((post) => <Card key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Blogs;
