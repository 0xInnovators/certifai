"use client";
import {
  AcademicManagerSmartContractABI,
  AcademicManagerSmartContractAddress,
} from "@/app/blockchain";
import Button from "@/app/components/Button";
import React, { useEffect, useState } from "react";
import { readContract } from "@wagmi/core";
import { config } from "@/app/blockchain/config";
import StudenteCourseScore from "@/app/components/StudentCourseScore";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import SectionTitle from "@/app/components/SectionTitle";

function StudentScorePage() {
  const inputClasses =
    "p-2 bg-gray-200 rounded-lg border-gray-700 border outline-none w-full text-gray-600";
  const [studentWallet, setStudentWallet] = useState("");
  const [studentCourses, setStudentCourses] = useState<any | null>(null);
  const { address } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (!address) router.push("/");
  }, [address, router]);

  async function handleFindStudentCourses() {
    if (studentWallet.length !== 42) {
      alert(studentWallet.length);
      return;
    }
    const result = await readContract(config, {
      address: AcademicManagerSmartContractAddress  as `0x${string}`,
      abi: AcademicManagerSmartContractABI,
      functionName: "getCoursesByStudent",
      args: [studentWallet],
    });
    setStudentCourses(result);
    console.log(result);
  }

  return (
    <div>
      <SectionTitle title="Lançar notas dos alunos" />
      <div className="p-2">
        <div className="w-full md:w-1/2">
          <label htmlFor="name" className="block">
            Informe a Wallet do aluno
          </label>
          <div>
            <input
              type="text"
              placeholder="Wallet do aluno"
              className={inputClasses}
              required
              onChange={(e) => setStudentWallet(e.target.value)}
              value={studentWallet}
            />
          </div>
          <Button color="blue" onClick={() => handleFindStudentCourses()}>
            Buscar cursos do aluno
          </Button>
        </div>
      </div>
      {studentCourses && studentWallet ? (
        <div className="p-2 flex flex-col gap-2">
          <p className="p-2s">Matrículas do aluno</p>
          {studentCourses.map((courseEnrolled: any, i: number) => (
            <StudenteCourseScore
              studentWallet={studentWallet}
              key={i}
              courseEnrolled={courseEnrolled}
            />
          ))}
        </div>
      ) : (
        <p className="">O aluno não está matriculado em nenhum curso</p>
      )}
    </div>
  );
}

export default StudentScorePage;
