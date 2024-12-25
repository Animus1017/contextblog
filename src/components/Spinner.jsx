import React from "react";
import { MoonLoader } from "react-spinners";
const Spinner = () => {
  return (
    <div className="flex flex-col gap-1 justify-center items-center h-screen">
      <MoonLoader />
      <span className="text-2xl font-bold">Loading...</span>
    </div>
  );
};
export default Spinner;
