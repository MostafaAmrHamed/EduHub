"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useAppSelector } from "@/redux/store";
import {
  useGetClassesQuery,
  useAddExamMutation,
} from "@/redux/features/api-slice";

const ExamDetails = () => {
  const router = useRouter();
  const classData = useAppSelector((state) => state.classReducer);
  const { isLoading } = useGetClassesQuery("");
  const [AddExam, { isLoading: examLoading }] = useAddExamMutation();
  const [examDetails, setExamDetails] = useState<createExam>({
    title: "",
    class: "",
    difficulty: "",
    duration: 1,
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    AddExam(examDetails);
    console.log(examDetails);
    if (!examLoading) return router.push("create-exam/form");
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center md:items-end gap-2 md:gap-8 p-2 sm:p-5 md:px-12 md:py-5 border-2 border-primary-1 rounded"
    >
      {/* Title of exam */}
      <div>
        <label className="block mt-2 text-lg"> Title </label>
        <input
          type="text"
          className="p-2.5 w-[220px] h-[40px] md:w-[500px] md:h-[50px] border-primary-3 border-2 outline-none focus:ring-primary-1 focus:border-primary-1 bg-primary-2 rounded"
          onChange={(e) => {
            setExamDetails({ ...examDetails, title: e.target.value });
          }}
          value={examDetails.title}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-[50px]">
        {/* Class */}
        <div>
          <label className="block mt-2 text-lg"> Class </label>
          <select
            className="md:p-2.5 w-[220px] h-[40px] md:w-[250px] md:h-[50px] block border-primary-3 border-2 outline-none focus:ring-primary-1  focus:border-primary-1 bg-primary-2 rounded"
            value={examDetails.class}
            onChange={(e) => {
              setExamDetails({ ...examDetails, class: e.target.value });
            }}
          >
            <option key="0" value={""}>
              Select Class
            </option>
            {classData.map((Class) => (
              <option key={Class._id} value={Class._id}>
                {Class.name}
              </option>
            ))}
          </select>
        </div>
        {/* Time of exam */}
        <div>
          <label className="block mt-2 text-lg"> Duration in mins </label>
          <div className="flex items-center justify-between p-2 w-[220px] h-[40px] md:w-[200px] md:h-[50px] border-2 border-primary-3 bg-primary-2 rounded text-xl hover:border-primary-1">
            <p
              className="text-4xl text-primary-1 pr-2 border-r-2 border-primary-3 leading-7 cursor-pointer select-none"
              onClick={(e) => {
                examDetails.duration > 1
                  ? setExamDetails({
                      ...examDetails,
                      duration: examDetails.duration - 1,
                    })
                  : "";
              }}
            >
              -
            </p>
            <input
              type="number"
              className="w-full text-center outline-none bg-primary-2 rounded"
              placeholder="1"
              onChange={(e) => {
                setExamDetails({
                  ...examDetails,
                  duration: Number(e.target.value),
                });
              }}
              value={examDetails.duration}
              maxLength={3}
            />
            <p
              className="text-4xl text-primary-1 pl-2 border-l-2 border-primary-3 leading-7 cursor-pointer select-none"
              onClick={(e) => {
                examDetails.duration <= 180
                  ? setExamDetails({
                      ...examDetails,
                      duration: examDetails.duration + 1,
                    })
                  : "";
              }}
            >
              +
            </p>
          </div>
        </div>
      </div>

      {/* Difficulty */}
      <div>
        <label className="block mt-2 text-lg"> Difficulty </label>
        <div className="flex flex-col gap-2 justify-items-center md:flex-row md:gap-[25px] text-lg">
          <div
            className={`flex gap-1 items-center justify-center w-[220px] h-[40px] md:w-[150px] md:h-[50px] border-2 bg-primary-2 rounded border-primary-3 cursor-pointer transition-all duration-300 hover:border-primary-1 ${
              examDetails.difficulty === "EASY" && " !border-primary-1"
            }`}
            onClick={() => {
              setExamDetails({ ...examDetails, difficulty: "EASY" });
            }}
          >
            <div className="relative w-5 h-7">
              <Image src="/images/Easy.png" fill alt="difficulty-easy" />
            </div>
            <p>Easy</p>
          </div>
          <div
            className={`flex gap-1 items-center justify-center w-[220px] h-[40px] md:w-[150px] md:h-[50px] border-2 bg-primary-2 rounded border-primary-3 cursor-pointer transition-all duration-300 hover:border-primary-1 ${
              examDetails.difficulty === "MEDIUM" && " !border-primary-1"
            } `}
            onClick={() => {
              setExamDetails({ ...examDetails, difficulty: "MEDIUM" });
            }}
          >
            <div className="relative w-5 h-7">
              <Image src="/images/Medium.png" fill alt="difficulty-medium" />
            </div>
            <p>Medium</p>
          </div>
          <div
            className={`flex gap-1 items-center justify-center w-[220px] h-[40px] md:w-[150px] md:h-[50px] border-2 bg-primary-2 rounded border-primary-3 cursor-pointer transition-all duration-300 hover:border-primary-1 ${
              examDetails.difficulty === "HARD" && " !border-primary-1"
            } `}
            onClick={() => {
              setExamDetails({ ...examDetails, difficulty: "HARD" });
            }}
          >
            <div className="relative w-5 h-7">
              <Image src="/images/Hard.png" fill alt="difficulty-hard" />
            </div>
            <p>Hard</p>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="flex !justify-end mt-2">
        <button
          type="submit"
          className="flex items-center justify-center border-2 border-primary-1 w-[220px] h-[40px] md:w-[150px] md:h-[50px] rounded text-lg text-primary-2 bg-primary-1 transition-all hover:pl-2 ease-in-out duration-300"
        >
          Next <IoIosArrowForward />
        </button>
      </div>
    </form>
  );
};

export default ExamDetails;
