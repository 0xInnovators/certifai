"use client";
import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { readContract } from "@wagmi/core";
import { config } from "@/app/blockchain/config";
import {
  AcademicManagerSmartContractABI,
  AcademicManagerSmartContractAddress,
  CertificateNFTSmartContractABI,
  CertificateNFTSmartContractAddress,
} from "../blockchain";
import FormatService from "../services/FormatService";
import Button from "./Button";
import { useWriteContract } from "wagmi";
import ShowError from "./ShowError";
import ShowSuccess from "./ShowSuccess";
import { IoIosMedal } from "react-icons/io";

interface StudentMintProps {
  courseEnrolled: any;
  studentWallet: string;
}

function StudentMint({
  courseEnrolled,
  studentWallet,
}: StudentMintProps) {
  const {data: hash, writeContract, error } = useWriteContract() 
  const [openScores, setOpenScores] = useState(false);
  const [studentRecords, setStudentRecords] = useState<any | null>(null);

  async function handleFindScores(courseId: number, studentWallet: string) {
    const result = await readContract(config, {
      address: AcademicManagerSmartContractAddress,
      abi: AcademicManagerSmartContractABI,
      functionName: "getStudentRecords",
      args: [studentWallet, courseId],
    });
    setStudentRecords(result);
    setOpenScores(true);
  }

  function handleMint(courseId: number){
    writeContract({ 
      address: CertificateNFTSmartContractAddress, 
      abi: CertificateNFTSmartContractABI, 
      functionName: 'generateCertificate', 
      args: [courseId]
    }) 
  }

  function renderHeader(): JSX.Element {
    return (
      <tr className="text-white text-sm font-extrabold">
        <th className="text-center w-[70%] md:w-[55%] p-3">Módulo</th>
        <th className="hidden md:table-cell w-[0%] md:w-[15%] text-center p-3">Obrigatório</th>
        <th className="text-center w-[15%] p-3">Nota mín.</th>
        <th className="text-center w-[15%] p-3">Nota aluno</th>
      </tr>
    );
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
          <td className="flex flex-row justify-center mt-2 h-full">
            {FormatService.formatScore(
              parseFloat(studentRecord.score)
            )}
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
            }>
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
      {openScores && 
      <div className="max-w-72 self-end">
        <Button color="blue" icon={<IoIosMedal />} onClick={() => handleMint(courseEnrolled.courseId.toString())}>Mintar certificado</Button>
      </div>
      }
      <ShowError error={error} />
      <ShowSuccess successMessage="NFT Mintado com sucesso" hash={hash as string} />
    </div>
  );
}

export default StudentMint;
