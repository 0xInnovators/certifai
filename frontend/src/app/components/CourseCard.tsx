"use client";
import React from "react";
import Button from "./Button";
import { useAccount, useWriteContract } from "wagmi";
import {
  AcademicManagerSmartContractABI,
  AcademicManagerSmartContractAddress,
} from "../blockchain";
import LessonDescription from "./LessonDescription";
import ShowError from "./ShowError";
import ShowSuccess from "./ShowSuccess";
import Image from "next/image";
import { FaUserPlus } from "react-icons/fa";

interface CourseCardProps {
  course: any;
  showEnrollButton: boolean;
}

function CourseCard({ course, showEnrollButton }: CourseCardProps) {
  const { address } = useAccount();
  const { data: hash, writeContract, error } = useWriteContract();

  function handleEnrollCourse(courseId: number) {
    writeContract({
      address: AcademicManagerSmartContractAddress  as `0x${string}`,
      abi: AcademicManagerSmartContractABI,
      functionName: "enrollStudent",
      args: [courseId],
    });
  }

  return (
    <div className="w-full flex flex-col m-auto p-4 gap-4 rounded-2xl border-gray-500 bg-gray-100 text-gray-600 h-full">
      <div className="flex flex-col gap-4 w-full justify-center">
        <div className="max-w-[500px] m-auto my-10">
          <Image src={course.courseImageURI} width={300} height={300} alt='certificate preview' objectFit="cover" className="w-full rounded-2xl" />
          <p className="italic w-full text-center text-gray-400">Preview certificado NFT</p>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <h2 className="text-2xl font-semibold">
            {course.courseName}
          </h2>
          <p className="text-justify">{course.courseDescription}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="">Módulos</h3>
        {
          showEnrollButton ? <>
          {course.lessons.map((lesson: any, i: number) => (
            <>
              <LessonDescription courseId={course.courseId} lesson={lesson} key={i} showAnswerAndQuestions={!showEnrollButton} />
            </>
            ))}
            </>
            : <>
            {course.lessons.map((lesson: any, i: number) => (
              <>
                <LessonDescription studentWallet={address} courseId={course.courseId} lesson={lesson} key={i} showAnswerAndQuestions={!showEnrollButton} />
              </>
              ))}
            </>
          }
      </div>
      {showEnrollButton && (
        <div className="w-full flex flex-col justify-end">
          {/* <p className=""><span className="font-extrabold">Investimento: </span>{course.coursePrice.toString()} Eth</p> */}
          <Button
            color="blue"
            onClick={() => handleEnrollCourse(course.courseId)}
            icon={<FaUserPlus />}
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
