import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";

const BlogPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-3 py-20">
        <div className="w-2/5 mx-auto">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="border px-4 py-1 rounded-md w-fit"
          >
            Back
          </button>
        </div>
        <Blogs />
      </div>
    </div>
  );
};

export default BlogPage;
