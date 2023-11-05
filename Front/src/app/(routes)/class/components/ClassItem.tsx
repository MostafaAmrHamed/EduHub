"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { Update, Delete } from "@/redux/features/class-slice";

const ClassItem = ({ id, name }: classes) => {
  const dispatch = useDispatch<AppDispatch>();
  const [edit, setEdit] = useState<boolean>(false);
  const [className, setClassName] = useState<string>(name);

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
          <p>{className}</p>
        )}

        <div className="flex gap-4">
          <button
            className="w-[80px] py-1 text-primary-2 bg-primary-1 hover:shadow-lg transition-shadow rounded"
            onClick={() => {
              dispatch(Update({ id: id, name: className }));
              setEdit(!edit);
            }}
          >
            {edit ? "Save" : "Edit"}
          </button>

          <button
            className="w-[80px] py-1 text-primary-2 bg-primary-4 hover:shadow-lg transition-shadow rounded"
            onClick={() => {
              dispatch(Delete(id));
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassItem;
