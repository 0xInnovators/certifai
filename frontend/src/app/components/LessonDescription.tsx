"use client";
import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp, FaPen } from "react-icons/fa";
import Button from "./Button";
import { AcademicManagerSmartContractABI, AcademicManagerSmartContractAddress } from "../blockchain";
import { useWriteContract } from "wagmi";
import ShowError from "./ShowError";
import ShowSuccess from "./ShowSuccess";
import { readContract } from "@wagmi/core";
import { config } from "../blockchain/config";
import Link from "next/link";

interface LessonDescriptionProps {
  courseId: string;
  studentWallet?: string;
  lesson: any;
  showAnswerAndQuestions: boolean
}

interface StudentRecordsProps {
  [lessonId: number]: {
      lessonAnswer: string;
  };
}

function LessonDescription({ lesson, showAnswerAndQuestions, courseId, studentWallet }: LessonDescriptionProps) {
  const [openData, setOpenData] = useState(false);
  const [lessonAnswer, setLessonAnswer] = useState("");
  const { data: hash, writeContract, error } = useWriteContract();
  
  function toggleOpenData() {
    if (openData) {
      setOpenData(false);
    } else {
      setOpenData(true);
    }
  }

  useEffect(() => {
    async function handleFindAnswers(courseId: string, studentWallet: string) {
      const result = await readContract(config, {
        address: AcademicManagerSmartContractAddress,
        abi: AcademicManagerSmartContractABI,
        functionName: "getStudentRecords",
        args: [studentWallet, courseId],
      });
      if (result && result.hasOwnProperty(lesson.lessonId)){
        // @ts-ignore
        setLessonAnswer(result[lesson.lessonId].lessonAnswer)
      }else {
        setLessonAnswer('');
      }
    }
    if (showAnswerAndQuestions && studentWallet){
      handleFindAnswers(courseId, studentWallet)
    }
  // }, [])
  }, [courseId, lesson.lessonId, showAnswerAndQuestions, studentWallet])
  
  

  function handleSaveAnswer(_courseId: string, _lessonId: string, _answer: string ){
    writeContract({
      address: AcademicManagerSmartContractAddress,
      abi: AcademicManagerSmartContractABI,
      functionName: "assignAnswer",
      args: [_courseId, _lessonId, _answer],
    });
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
            <div className="flex flex-col w-full mt-4">
              <p className="">Módulo obrigatório?{lesson.mandatory ? " Sim" : " Não"}</p>
              {lesson.mandatory && (
                  <p className="">Aprovação com {lesson.minimumPassingScore.toString()} pts</p>
              )}
            </div>
          </div>
        </div>
      )}
      {
        showAnswerAndQuestions && openData &&
        <div className="">
          <p className="mt-6">Material do módulo</p>
          <Link href={lesson.lessonDocURI.toString()} className="underline text-blue-600" target="_blank">Clique aqui</Link>
          <p className="mt-6">Perguntas do módulo</p>
          <p className="">{lesson.lessonQuestion}</p>
          <p className="mt-8">Respostas</p>
          <p className="">{lesson.lessonAnswer}</p>
          <textarea
              className="p-2  rounded-lg border-gray-700 border outline-none w-full text-gray-600"
              cols={80}
              rows={10}
              onChange={(e) => setLessonAnswer(e.target.value)}
              value={lessonAnswer}
              required
              placeholder="Insira aqui sua(s) resposta(s)"
            ></textarea>
            <Button icon={<FaPen />} color="blue" className="max-w-[200px]" onClick={() => handleSaveAnswer(courseId, lesson.lessonId, lessonAnswer)}>Salvar respostas</Button>
            <ShowError error={error} />
            <ShowSuccess
              successMessage="Respostas salvas com sucesso"
              hash={hash as string}
            />
        </div>
      }
    </div>
  );
}

export default LessonDescription;
