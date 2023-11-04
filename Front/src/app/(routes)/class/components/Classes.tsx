import React from "react";
import ClassItem from "./ClassItem";

const Classes = () => {
  return (
    <div className="flex flex-col gap-2 mt-5">
      <div className="flex flex-col md:flex-row items-center gap-2 mb-5">
        <input
          type="text"
          className="p-2.5 w-[220px] h-[40px] md:w-[500px] border-primary-3 border-2 outline-none focus:ring-primary-1 focus:border-primary-1 bg-primary-2 rounded"
          placeholder="Class Name"
        />
        <button className="bg-primary-1 w-[220px] md:w-[130px] h-[40px] text-primary-2 rounded shadow-xl hover:scale-105 transition-all ease-in-out duration-300">
          Add Class
        </button>
      </div>
      <ClassItem />
      <ClassItem />
      <ClassItem />
    </div>
  );
};

export default Classes;
