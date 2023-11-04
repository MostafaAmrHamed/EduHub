"use client";
import { useState } from "react";

const ClassItem = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const [className, setClassName] = useState<string>("sana awla");

  return (
    <div>
      <div
        className={`flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center bg-primary-2 hover:bg-primary-3 p-2`}
      >
        {edit ? (
          <div>
            <input
              type="text"
              name="className"
              value={className}
              className="p-2.5 w-[220px] h-[40px] text-primary-2 border-primary-2 border-2 outline-none focus:ring-primary-2 focus:border-primary-2 bg-primary-1 rounded-md"
              onChange={(e) => {
                setClassName(e.target.value);
              }}
            />
          </div>
        ) : (
          <p>Sana Awla</p>
        )}

        <div className="flex gap-4">
          {edit ? (
            <button
              className="w-[80px] py-1 text-primary-2 bg-primary-1 hover:shadow-lg transition-shadow rounded"
              onClick={() => setEdit(!edit)}
            >
              Save
            </button>
          ) : (
            <button
              className="w-[80px] py-1 text-primary-2 bg-primary-1 hover:shadow-lg transition-shadow rounded"
              onClick={() => setEdit(!edit)}
            >
              Edit
            </button>
          )}

          <button className="w-[80px] py-1 text-primary-2 bg-primary-4 hover:shadow-lg transition-shadow rounded">
            Delete
          </button>
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row items-center gap-2 mb-5">
          <input
            type="text"
            className="p-2.5 w-[220px] h-[40px] md:w-[500px] border-primary-3 border-2 outline-none focus:ring-primary-1 focus:border-primary-1 bg-primary-2 rounded"
            placeholder="Class Name"
          />
          <button className="bg-primary-1 w-[220px] md:w-[130px] h-[40px] text-primary-2 rounded shadow-xl hover:scale-105 transition-all ease-in-out duration-300">
            Add Class
          </button>
        </div> */}
    </div>
  );
};

export default ClassItem;
