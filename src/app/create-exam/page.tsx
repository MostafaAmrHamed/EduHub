import { AiFillDatabase, AiFillCheckCircle } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import type { Metadata } from "next";
import ExamDetails from "./ExamDetails";

export const metadata: Metadata = {
  title: "Create Exam",
};
const CreateExam = () => {
  return (
    <main className="flex flex-col items-center gap-5">
      <div className="flex items-center gap-2 md:gap-4 bg-primary-2 p-2 md:p-5 rounded-md w-fit text-xs sm:text-base  md:text-xl text-primary-1">
        <div className="flex gap-1 items-center cursor-pointer ">
          <AiFillDatabase />
          <p>Exam Details</p>
        </div>
        <IoIosArrowForward />
        <div className="flex gap-1 items-center cursor-pointer text-primary-3">
          <AiFillCheckCircle />
          <p>Start Exam</p>
        </div>
      </div>
      <ExamDetails />
    </main>
  );
};

export default CreateExam;
