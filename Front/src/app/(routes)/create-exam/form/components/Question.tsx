"use client";
import React, { useState } from "react";
import Answer from "./Answer";
import { RxDragHandleDots2, RxCross2 } from "react-icons/rx";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useAddImageMutation } from "@/redux/features/api-slice";
import Image from "next/image";
const Question = () => {
  const [addImage, { data, reset }] = useAddImageMutation();
  const uploadImage = async (file: File) => {
    const form = new FormData();
    form.append("file", file);
    await addImage(form);
  };

  return (
    <div className="bg-primary-2 p-5 w-[1000px]">
      <div className="flex justify-between px-2 mb-3">
        <div className="flex items-center">
          <RxDragHandleDots2 size={28} className="text-primary-3" />
          <h1 className="text-primary-1 font-semibold text-xl">Q 1</h1>
        </div>
        <RxCross2
          className="text-primary-3 cursor-pointer hover:text-primary-1 transition-all"
          size={28}
        />
      </div>
      <form className="w-[800px] mx-auto space-y-5">
        <div className="flex items-center gap-3">
          <label>
            <input
              type="text"
              className="w-[750px] h-[60px] p-5 border-primary-3 border-2 outline-none focus:ring-primary-1 focus:border-primary-1 rounded-sm"
              placeholder="Question title?"
            />
          </label>
          {/* Image - Upload */}
          <div>
            <input
              type="file"
              id="file-btn"
              accept="image/*"
              hidden
              onChange={async (e) => {
                if (e.target.files) {
                  await uploadImage(e.target.files[0]);
                }
              }}
            />
            <label htmlFor="file-btn">
              <FaCloudUploadAlt
                size={32}
                className="text-primary-3 hover:text-primary-1 cursor-pointer transition-all"
              />
            </label>
          </div>
        </div>
        {data?.link ? (
          <>
            <div className="flex justify-end mr-5">
              <button
                //Clear ID that data will send to back... and make the "ID" ternary op on image
                onClick={() => {
                  reset;
                }}
                className="flex items-center text-primary-3 hover:text-primary-1 cursor-pointer transition-all"
              >
                Delete Image
                <MdDelete size={32} />
              </button>
            </div>
            <div className="relative max-w-[800px] h-[200px]">
              <Image
                src={data?.link}
                alt="question-image"
                fill
                className="h-full w-full object-contain"
              />
            </div>
          </>
        ) : null}

        <div className="flex flex-col gap-2">
          <Answer />
          <Answer />
          <Answer />
          <p className="text-right text-xl text-primary-3 cursor-pointer hover:text-primary-1 transition-all">
            Add choice +
          </p>
        </div>
      </form>
    </div>
  );
};

export default Question;
