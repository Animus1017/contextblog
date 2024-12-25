import React from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import { useLocation, useNavigate } from "react-router-dom";

const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header />
      <div className="py-20 flex flex-col gap-3">
        <div className="flex gap-2 items-center w-2/5 mx-auto">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="border px-4 py-1 rounded-md"
          >
            Back
          </button>
          <h2 className="font-bold text-lg">
            Blogs Tagged <span className="underline text-blue-700">#{tag}</span>
          </h2>
        </div>
        <Blogs />
      </div>
      <Pagination />
    </div>
  );
};

export default TagPage;
