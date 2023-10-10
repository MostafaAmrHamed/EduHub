import { AiFillDatabase, AiFillCheckCircle } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
const CreateExam = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 md:gap-4 bg-primary-2 p-2 md:p-5 rounded-md w-fit text-xs sm:text-base  md:text-xl text-primary-3">
        <div className="flex gap-1 items-center cursor-pointer">
          <AiFillDatabase />
          <p>Exam Details</p>
        </div>
        <IoIosArrowForward />
        <div className="flex gap-1 items-center cursor-pointer">
          <AiFillCheckCircle />
          <p>Start Exam</p>
        </div>
      </div>
      <div>
        <p>sadsa</p>
      </div>
    </div>
  );
};

export default CreateExam;
