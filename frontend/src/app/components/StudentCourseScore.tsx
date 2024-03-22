"use client";
import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { readContract } from "@wagmi/core";
import { config } from "@/app/blockchain/config";
import {
  AcademicManagerSmartContractABI,
  AcademicManagerSmartContractAddress,
} from "../blockchain";
import FormatService from "../services/FormatService";
import Button from "./Button";
import { useWriteContract } from "wagmi";
import ShowError from "./ShowError";
import ShowSuccess from "./ShowSuccess";
import { FaSave } from "react-icons/fa";

interface StudentCourseScoreProps {
  courseEnrolled: any;
  studentWallet: string;
}

function StudentCourseScore({
  courseEnrolled,
  studentWallet,
}: StudentCourseScoreProps) {
  const { data: hash, writeContract, error } = useWriteContract();
  const [openScores, setOpenScores] = useState(false);
  const [openedLessonName, setOpenedLessonName] = useState("");
  const [openedLessonQuestion, setOpenedLessonQuestion] = useState("");
  const [openedLessonAnswer, setOpenedLessonAnswer] = useState("");
  const [studentRecords, setStudentRecords] = useState<any | null>(null);

  async function handleFindScores(courseId: number, studentWallet: string) {
    const result = await readContract(config, {
      address: AcademicManagerSmartContractAddress  as `0x${string}`,
      abi: AcademicManagerSmartContractABI,
      functionName: "getStudentRecords",
      args: [studentWallet, courseId],
    });
    console.log(result);
    
    setStudentRecords(result);
    setOpenScores(true);
  }

  function handleOpenAnswers(
    lessonName: string,
    lessonQuestion: string,
    lessonAnswer: string
  ) {
    setOpenedLessonName(lessonName)
    setOpenedLessonQuestion(lessonQuestion)
    setOpenedLessonAnswer(lessonAnswer)
  }

  function handleAssignScores(courseId: number) {
    writeContract({
      address: AcademicManagerSmartContractAddress  as `0x${string}`,
      abi: AcademicManagerSmartContractABI,
      functionName: "assignScores",
      args: [studentWallet, courseId, studentRecords],
    });
  }

  function renderHeader(): JSX.Element {
    return (
      <tr className="text-white text-sm font-extrabold">
        <th className="text-center w-[70%] md:w-[55%] p-3">Módulo</th>
        <th className="hidden md:table-cell w-[0%] md:w-[15%] text-center p-3">
          Obrigatório
        </th>
        <th className="text-center w-[10%] p-3">Nota mín.</th>
        <th className="text-center w-[15%] p-3">Nota aluno</th>
        <th className="text-center w-[5%] p-3"></th>
      </tr>
    );
  }

  function handleUpdateStudentRecords(
    scoreRecord: any,
    value: string,
    i: number
  ) {
    const updatedRecords = [...studentRecords];
    scoreRecord.score = BigInt(value);
    updatedRecords[i] = scoreRecord;
    setStudentRecords(updatedRecords);
  }

  function renderData(): JSX.Element[] {
    return studentRecords?.map((studentRecord: any, i: number) => {
      return (
        <tr
          key={studentRecord.lessonId}
          className={`text-sm font-extrabold text-gray-500 bg-white ${
            i === 0 ? "" : "border-t-2 border-gray-200"
          }`}
        >
          <td className="text-center p-3">{studentRecord.lessonName}</td>
          <td className="hidden md:table-cell text-center p-3">
            {studentRecord.mandatory ? "Sim" : "Não"}
          </td>
          <td className="text-center p-3">
            {FormatService.formatScore(
              parseFloat(studentRecord.minimumPassingScore)
            )}
          </td>
          <td className="flex flex-row justify-center mt-2 h-full gap-2">
            <input
              type="number"
              className="w-16 px-3 pr-1 border border-gray-600 rounded-2xl"
              placeholder=""
              onChange={(e) =>
                handleUpdateStudentRecords(studentRecord, e.target.value, i)
              }
              value={studentRecord.score.toString()}
              max={100}
            />
          </td>
          <td>
            <div
              className="rounded-full bg-gray-200 cursor-pointer hover:bg-primary-color-medium hover:text-gray-200 transition-all ease-in-out text-primary-color-medium flex items-center justify-center w-8 h-8"
              onClick={() =>
                handleOpenAnswers(
                  studentRecord.lessonName,
                  studentRecord.lessonQuestion,
                  studentRecord.lessonAnswer
                )
              }
            >
              <FaMagnifyingGlass />
            </div>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="px-2 py-8 flex flex-col bg-gray-100 rounded-2xl border-gray-500 text-gray-600 mx-2 gap-2">
      <div className="flex flex-row items-center">
        <p className="w-full">{courseEnrolled.courseName}</p>
        <div className="w-12 h-12">
          <div
            className="w-10 h-10 rounded-full text-white border-gray-600 border bg-gray-600 items-center justify-center flex transition-all ease-in-out hover:bg-gray-100 hover:text-gray-600 cursor-pointer"
            onClick={() =>
              handleFindScores(courseEnrolled.courseId, studentWallet)
            }
          >
            <FaMagnifyingGlass />
          </div>
        </div>
      </div>
      {openScores && (
        <table className="rounded-3xl overflow-hidden w-full">
          <thead className="bg-primary-color-medium font-bold text-sm">
            {renderHeader()}
          </thead>
          <tbody>{renderData()}</tbody>
        </table>
      )}
      {openScores && (
        <div className="max-w-72 self-end">
          <Button
            color="blue"
            icon={<FaSave />}
            onClick={() => handleAssignScores(courseEnrolled.courseId)}
          >
            Salvar notas
          </Button>
        </div>
      )}
      <ShowError error={error} />
      <ShowSuccess
        successMessage="Notas salvas com sucesso"
        hash={hash as string}
      />
      {
        openedLessonName !== '' && (
          <div className="">
            <p className=""><span className="font-extrabold">Módulo: </span>{openedLessonName}</p>
            <p className=""><span className="font-extrabold">Questões: </span>{openedLessonQuestion}</p>
            <p className=""><span className="font-extrabold">Respostas: </span>{openedLessonAnswer}</p>
          </div>
        )

      }
    </div>
  );
}

export default StudentCourseScore;
