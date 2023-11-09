import { useState } from "react";
import ClassItem from "./ClassItem";
import { useAppSelector } from "@/redux/store";
import {
  useAddClassMutation,
  useGetClassesQuery,
} from "@/redux/features/api-slice";

const Classes = () => {
  const [addClass] = useAddClassMutation();
  const { isLoading } = useGetClassesQuery("");
  const classData = useAppSelector((state) => state.classReducer);
  const [classItem, setClassItem] = useState<Pick<classes, "name">>({
    name: "",
  });
  const dateChange = (e: any) => {
    setClassItem({ ...classItem, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    addClass({ name: classItem.name });
    setClassItem({ name: "" });
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="flex flex-col gap-2 mt-5">
      <div className="flex flex-col md:flex-row items-center gap-2 mb-5">
        <input
          type="text"
          name="name"
          className="p-2.5 w-[220px] h-[40px] md:w-[500px] border-primary-3 border-2 outline-none focus:ring-primary-1 focus:border-primary-1 bg-primary-2 rounded"
          placeholder="Class Name"
          value={classItem.name}
          onChange={dateChange}
        />
        <button
          className="bg-primary-1 w-[220px] md:w-[130px] h-[40px] text-primary-2 rounded shadow-xl hover:scale-105 transition-all ease-in-out duration-300"
          onClick={handleSubmit}
        >
          Add Class
        </button>
      </div>
      {classData?.map((classD) => (
        <ClassItem _id={classD._id} name={classD.name} key={classD._id} />
      ))}
    </div>
  );
};

export default Classes;
