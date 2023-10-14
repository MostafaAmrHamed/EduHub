import ClassItem from "./components/ClassItem";

const Classes = () => {
  return (
    <div className="mx-auto md:w-[638px]">
      <div className="flex flex-col md:flex-row items-center gap-2">
        <input
          type="text"
          className="p-2.5 w-[220px] h-[40px] md:w-[500px] border-primary-3 border-2 outline-none focus:ring-primary-1 focus:border-primary-1 bg-primary-2 rounded"
          placeholder="Class Name"
        />
        <button className="bg-primary-1 w-[220px] md:w-[130px] h-[40px] text-primary-2 rounded shadow-xl hover:scale-105 transition-all ease-in-out duration-300">
          Add Class
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-5">
        <ClassItem />
        <ClassItem />
        <ClassItem />
      </div>
    </div>
  );
};

export default Classes;
