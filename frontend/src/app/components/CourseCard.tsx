"use client";
import React from "react";
import Button from "./Button";
import { useAccount, useWriteContract, type BaseError } from "wagmi";
import {
  AcademicManagerSmartContractABI,
  AcademicManagerSmartContractAddress,
} from "../blockchain";
import LessonDescription from "./LessonDescription";
import HandlingErrorService from "../services/HandlingErrorService";
import ShowError from "./ShowError";
import ShowSuccess from "./ShowSuccess";
import Image from "next/image";

interface CourseCardProps {
  course: any;
  showEnrollButton: boolean;
}

function CourseCard({ course, showEnrollButton }: CourseCardProps) {
  const { isConnected, status } = useAccount();
  const { data: hash, writeContract, error } = useWriteContract();

  function handleEnrollCourse(courseId: number) {
    writeContract({
      address: AcademicManagerSmartContractAddress,
      abi: AcademicManagerSmartContractABI,
      functionName: "enrollStudent",
      args: [courseId],
    });
  }

  return (
    <div className="max-w-[700px] flex flex-col w-full m-auto p-4 gap-4 rounded-2xl border-gray-500 bg-gray-100 text-gray-600 h-full">
      <div className="flex flex-col gap-4">
        <Image src={course.courseImageURI} width={300} height={300} alt='certificate preview' objectFit="cover" className="w-full rounded-2xl" />
        <div className="flex flex-col gap-1 w-full">
          <h2 className="text-2xl font-semibold text-justify">
            {course.courseName}
          </h2>
          <p className="text-justify">{course.courseDescription}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="">Módulos</h3>
        {course.lessons.map((lesson: any, i: number) => (
          <LessonDescription lesson={lesson} key={i} />
        ))}
      </div>
      {showEnrollButton && (
        <div className="w-full flex justify-end">
          <Button
            color="blue"
            onClick={() => handleEnrollCourse(course.courseId)}
          >
            Matricular
          </Button>
        </div>
      )}
      <ShowError error={error} />
      <ShowSuccess successMessage="Matrícula feita com sucesso" hash={hash as string} />
    </div>
  );
}

export default CourseCard;
