import { RxDragHandleDots2, RxCross2 } from "react-icons/rx";
import { AiFillCheckSquare } from "react-icons/ai";

const Answer = () => {
  return (
    <div className="flex items-center w-[800px]">
      <div className="flex items-center gap-2 w-[50px] text-xl text-primary-3">
        <RxDragHandleDots2 />
        <p>A</p>
      </div>
      <div className="flex w-[750px] bg-white border-2 border-primary-3 hover:border-primary-1 focus:ring-primary-1 focus:border-primary-1">
        <label>
          <input
            type="text"
            className="p-2 w-[650px] outline-none focus:ring-primary-1 focus:border-primary-1 rounded-sm"
          />
        </label>
        <div className="flex w-[100px] justify-around items-center text-primary-3">
          <AiFillCheckSquare
            size={38}
            className="cursor-pointer hover:text-primary-1 transition-all"
          />
          <span className=" border-r-2 border-primary-3 h-full"> </span>
          <RxCross2
            size={32}
            className="cursor-pointer hover:text-primary-1 transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default Answer;
