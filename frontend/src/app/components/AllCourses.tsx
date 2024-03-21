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
    functionName: "getAllCourses"
  });

  useEffect(() => {
    // if (Array.isArray(result.data)) {
    //   setCourses(result.data);
    // }
    const coursesArray = [
      {
        courseId: 1,
        courseName: 'Solidity',
        courseDescription: 'Solidity do basico ao avancado',
        courseImageURI: 'https://www.affigueiredo.com.br/wp-content/uploads/2018/12/Certificado-AF-Figueiredo-IMAGEM-2-1-600x424.png',
        lessons: [
          {
            lessonName: 'Modulo 1',
            lessonContent: 'Conteudo do modulo 1',
            mandatory: true,
            minimumPassingScore: 60
          },
          {
            lessonName: 'Modulo 2',
            lessonContent: 'Conteudo do modulo 2',
            mandatory: true,
            minimumPassingScore: 60
          },
          {
            lessonName: 'Modulo 3',
            lessonContent: 'Conteudo do modulo 3',
            mandatory: false,
            minimumPassingScore: 60
          }
        ]
      },
      {
        courseId: 1,
        courseName: 'Solidity',
        courseDescription: 'Solidity do basico ao avancado',
        courseImageURI: 'https://www.affigueiredo.com.br/wp-content/uploads/2018/12/Certificado-AF-Figueiredo-IMAGEM-2-1-600x424.png',
        lessons: [
          {
            lessonName: 'Modulo 1',
            lessonContent: 'Conteudo do modulo 1',
            mandatory: true,
            minimumPassingScore: 60
          },
          {
            lessonName: 'Modulo 2',
            lessonContent: 'Conteudo do modulo 2',
            mandatory: true,
            minimumPassingScore: 60
          },
          {
            lessonName: 'Modulo 3',
            lessonContent: 'Conteudo do modulo 3',
            mandatory: false,
            minimumPassingScore: 60
          }
        ]
      },
      {
        courseId: 1,
        courseName: 'Solidity',
        courseDescription: 'Solidity do basico ao avancado',
        courseImageURI: 'https://www.affigueiredo.com.br/wp-content/uploads/2018/12/Certificado-AF-Figueiredo-IMAGEM-2-1-600x424.png',
        lessons: [
          {
            lessonName: 'Modulo 1',
            lessonContent: 'Conteudo do modulo 1',
            mandatory: true,
            minimumPassingScore: 60
          },
          {
            lessonName: 'Modulo 2',
            lessonContent: 'Conteudo do modulo 2',
            mandatory: true,
            minimumPassingScore: 60
          },
          {
            lessonName: 'Modulo 3',
            lessonContent: 'Conteudo do modulo 3',
            mandatory: false,
            minimumPassingScore: 60
          }
        ]
      },
      {
        courseId: 1,
        courseName: 'Solidity',
        courseDescription: 'Solidity do basico ao avancado',
        courseImageURI: 'https://www.affigueiredo.com.br/wp-content/uploads/2018/12/Certificado-AF-Figueiredo-IMAGEM-2-1-600x424.png',
        lessons: [
          {
            lessonName: 'Modulo 1',
            lessonContent: 'Conteudo do modulo 1',
            mandatory: true,
            minimumPassingScore: 60
          },
          {
            lessonName: 'Modulo 2',
            lessonContent: 'Conteudo do modulo 2',
            mandatory: true,
            minimumPassingScore: 60
          },
          {
            lessonName: 'Modulo 3',
            lessonContent: 'Conteudo do modulo 3',
            mandatory: false,
            minimumPassingScore: 60
          }
        ]
      }
    ]
    setCourses(coursesArray)
    console.log(result.data);

    // }, [result.data])
  }, [])

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
