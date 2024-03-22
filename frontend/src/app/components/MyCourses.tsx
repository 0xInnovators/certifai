"use client";
import React, { useEffect, useState } from "react";
import {
  AcademicManagerSmartContractABI,
  AcademicManagerSmartContractAddress,
} from "../blockchain/index";
import { useReadContract } from "wagmi";
import CourseCard from "./CourseCard";

interface MyCoursesProps {
  address: string
}

function MyCourses({address}: MyCoursesProps) {
  const [courses, setCourses] = useState<any[]>([]);
  const result = useReadContract({
    abi: AcademicManagerSmartContractABI,
    address: AcademicManagerSmartContractAddress as `0x${string}`,
    functionName: "getCoursesByStudent",
    args: [address],
  });

  useEffect(() => {
    if (Array.isArray(result.data)) {
      setCourses(result.data);
    }
  }, [result.data])

  return (
    <div className="w-full flex flex-col gap-8 p-2 ">
      {courses.length === 0 ? (
        <p className="">Nenhum curso matriculado</p>
      ) : (
        <div className="w-full flex flex-col gap-4">

          {courses.map((course, i) => (
            <CourseCard key={i} course={course} showEnrollButton={false}/>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyCourses;
