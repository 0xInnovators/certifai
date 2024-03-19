"use client";
import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

interface LessonDescriptionProps {
  lesson: any;
}

function LessonDescription({ lesson }: LessonDescriptionProps) {
  const [openData, setOpenData] = useState(false);
  function toggleOpenData() {
    if (openData) {
      setOpenData(false);
    } else {
      setOpenData(true);
    }
  }
  return (
    <div className="py-4 flex flex-col gap-2">
      <div
        className="flex items-center justify-between rounded-lg bg-gray-200 p-2 cursor-pointer"
        onClick={toggleOpenData}
      >
        <h4>{lesson.lessonName}</h4>
        {openData ? <FaArrowUp /> : <FaArrowDown />}
      </div>
      {openData && (
        <div className="pr-6">
          <p className="text-justify">{lesson.lessonContent}</p>
          <div className="flex w-full">
            <div className="flex flex-col p-2 w-[50%]">
              <p className="">Módulo obrigatório?</p>
              {lesson.mandatory ? (
                <p className="">Sim</p>
              ) : (
                <p className="">Não</p>
              )}
            </div>
            {lesson.mandatory && (
              <div className="flex flex-col p-2 w-[50%]">
                <p className="">Aprovação com</p>
                <p className="">{lesson.minimumPassingScore.toString()}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default LessonDescription;
