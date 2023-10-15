"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import easy from "../../../public/images/Easy.png";
import medium from "../../../public/images/Medium.png";
import hard from "../../../public/images/Hard.png";
import Link from "next/link";

const ExamDetails = () => {
  const [examDetails, setExamDetails] = useState<ExamDetials>({
    titleOfExam: "",
    class: "",
    difficulty: "",
    time: 1,
  });
  const Classes = [
    { value: "", text: "Select class" },
    { value: "one", text: "One" },
    { value: "two", text: "Two" },
    { value: "three", text: "Three" },
  ];
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
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
            setExamDetails({ ...examDetails, titleOfExam: e.target.value });
          }}
          value={examDetails.titleOfExam}
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
            {Classes.map((Class) => (
              <option key={Class.value} value={Class.value}>
                {Class.text}
              </option>
            ))}
          </select>
        </div>
        {/* Time of exam */}
        <div>
          <label className="block mt-2 text-lg"> Duration in mins </label>
          <div className="flex items-center justify-between p-2 w-[220px] h-[40px] md:w-[200px] md:h-[50px] border-2 border-primary-3 bg-primary-2 rounded text-xl">
            <p
              className="text-4xl text-primary-1 pr-2 border-r-2 border-primary-3 leading-7 cursor-pointer select-none"
              onClick={(e) => {
                examDetails.time > 1
                  ? setExamDetails({
                      ...examDetails,
                      time: examDetails.time - 1,
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
                  time: Number(e.target.value),
                });
              }}
              value={examDetails.time}
              maxLength={3}
            />
            <p
              className="text-4xl text-primary-1 pl-2 border-l-2 border-primary-3 leading-7 cursor-pointer select-none"
              onClick={(e) => {
                examDetails.time <= 180
                  ? setExamDetails({
                      ...examDetails,
                      time: examDetails.time + 1,
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
              examDetails.difficulty === "easy" && " !border-primary-1"
            } `}
            onClick={() => {
              setExamDetails({ ...examDetails, difficulty: "easy" });
            }}
          >
            <Image src={easy} alt="difficulty-easy" className="w-[20px]" />
            <p>Easy</p>
          </div>
          <div
            className={`flex gap-1 items-center justify-center w-[220px] h-[40px] md:w-[150px] md:h-[50px] border-2 bg-primary-2 rounded border-primary-3 cursor-pointer transition-all duration-300 hover:border-primary-1 ${
              examDetails.difficulty === "medium" && " !border-primary-1"
            } `}
            onClick={() => {
              setExamDetails({ ...examDetails, difficulty: "medium" });
            }}
          >
            <Image src={medium} alt="difficulty-medium" className="w-[20px]" />
            <p>Medium</p>
          </div>
          <div
            className={`flex gap-1 items-center justify-center w-[220px] h-[40px] md:w-[150px] md:h-[50px] border-2 bg-primary-2 rounded border-primary-3 cursor-pointer transition-all duration-300 hover:border-primary-1 ${
              examDetails.difficulty === "hard" && " !border-primary-1"
            } `}
            onClick={() => {
              setExamDetails({ ...examDetails, difficulty: "hard" });
            }}
          >
            <Image src={hard} alt="difficulty-hard" className="w-[20px]" />
            <p>Hard</p>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="flex !justify-end mt-2">
        <Link
          className="flex items-center justify-center border-2 border-primary-1 w-[220px] h-[40px] md:w-[150px] md:h-[50px] rounded text-lg text-primary-2 bg-primary-1 transition-all hover:pl-2 ease-in-out duration-300"
          onClick={() => {
            console.log(examDetails);
          }}
          href="/create-exam/form"
        >
          Next <IoIosArrowForward />
        </Link>
      </div>
    </form>
  );
};

export default ExamDetails;
