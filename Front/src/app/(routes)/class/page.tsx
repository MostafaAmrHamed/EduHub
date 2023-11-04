"use client";
import ClassItem from "./components/ClassItem";
import Classes from "./components/Classes";
// import { useGetClassesQuery } from "@/redux/features/api-slice";
const Class = () => {
  // const { data, isError, isLoading } = useGetClassesQuery("");
  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <div className="mx-auto md:w-[638px]">
      <Classes />
    </div>
  );
};

export default Class;
