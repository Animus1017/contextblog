import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div className="flex flex-col gap-2">
      <NavLink to={`/blog/${post.id}`}>
        <h3 className="font-black text-lg">{post.title}</h3>
      </NavLink>
      <div>
        <p className="text-sm">
          By <span className="italic">{post.author}</span> on{" "}
          <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
            <span className="underline text-bold">{post.category}</span>
          </NavLink>
        </p>
        <p className="text-sm">Posted On {post.date}</p>
      </div>
      <p>{post.content}</p>
      <div className="flex gap-2">
        {post.tags.map((tag, index) => (
          <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`} key={index}>
            <span className="text-xs underline text-blue-700">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Card;
