"use client";
import React, { useEffect, useState } from "react";
import {
  AcademicManagerSmartContractABI,
  AcademicManagerSmartContractAddress,
} from "../blockchain/index";
import { useReadContract } from "wagmi";
import CourseCard from "./CourseCard";
import SectionTitle from "./SectionTitle";

function AllCourses() {
  const [courses, setCourses] = useState<any[]>([]);
  const result = useReadContract({
    abi: AcademicManagerSmartContractABI,
    address: AcademicManagerSmartContractAddress,
    functionName: "getAllCourses",
  });

  useEffect(() => {
    if (Array.isArray(result.data)) {
      setCourses(result.data);
    }
  }, [result.data]);

  return (
    <div id="courses" className="w-full flex flex-col gap-8 px-2">
      <SectionTitle title="Cursos disponíveis" />
      {!courses ? (
        <p className="">Nenhum curso cadastrado</p>
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {courses.map((course, i) => (
            <CourseCard key={i} course={course} showEnrollButton={true} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AllCourses;
