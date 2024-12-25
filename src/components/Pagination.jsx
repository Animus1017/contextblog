import React, { useContext } from "react";
import { BlogContext } from "../App";
const Pagination = () => {
  const { page, totalPages, handleChange } = useContext(BlogContext);

  return (
    <div className="py-2 drop-shadow-lg border-t-2 fixed bottom-0 bg-white w-full">
      <div className="w-2/5 flex mx-auto justify-between items-center">
        <div className="flex gap-3">
          {page > 1 && (
            <button
              onClick={() => handleChange(page - 1)}
              className="border px-4 py-1 rounded-md"
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              onClick={() => handleChange(page + 1)}
              className="border px-4 py-1 rounded-md"
            >
              Next
            </button>
          )}
        </div>
        <p className="font-bold text-sm">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
