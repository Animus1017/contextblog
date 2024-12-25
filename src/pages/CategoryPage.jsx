import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import Header from "../components/Header";

const CategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
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
            Blogs on <span className="underline">{category}</span>
          </h2>
        </div>
        <Blogs />
      </div>
      <Pagination />
    </div>
  );
};

export default CategoryPage;
