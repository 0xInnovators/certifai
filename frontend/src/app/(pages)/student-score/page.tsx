"use client";
import {
  AcademicManagerSmartContractABI,
  AcademicManagerSmartContractAddress,
} from "@/app/blockchain";
import Button from "@/app/components/Button";
import PageTitle from "@/app/components/PageTitle";
import React, { useEffect, useState } from "react";
import { readContract } from "@wagmi/core";
import { config } from "@/app/blockchain/config";
import StudenteCourseScore from "@/app/components/StudentCourseScore";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

function StudentScorePage() {
  const inputClasses =
    "p-2 bg-gray-200 rounded-lg border-gray-700 border outline-none w-full text-gray-600";
  const [studentWallet, setStudentWallet] = useState("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
  const [studentCourses, setStudentCourses] = useState<any | null>(null);
  const {address}  = useAccount()
  const router = useRouter()

  useEffect(() => {
    if (!address) router.push('/')
  }, [address, router])

  async function handleFindStudentCourses() {
    if (studentWallet.length !== 42) {
      alert(studentWallet.length);
      return;
    }
    const result = await readContract(config, {
      address: AcademicManagerSmartContractAddress,
      abi: AcademicManagerSmartContractABI,
      functionName: "getCoursesByStudent",
      args: [studentWallet],
    });
    setStudentCourses(result);
    console.log(result);
  }

  return (
    <div>
      <PageTitle
        title="Lançar notas dos alunos"
        subtitle="Aqui, você atualiza a situação do aluno de acordo com suas notas!"
      />
      <form className="p-2">
        <div className="">
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
        </div>
        <Button color="pink" onClick={() => handleFindStudentCourses()}>
          Buscar cursos do aluno
        </Button>
      </form>
      {studentCourses && studentWallet ? (
        <div className="p-2 flex flex-col gap-2">
          <p className="p-2s">Matrículas do aluno</p>
          {studentCourses.map((courseEnrolled: any, i: number) => (
            <StudenteCourseScore studentWallet={studentWallet} key={i} courseEnrolled={courseEnrolled} />
          ))}
        </div>
      ) : (
        <p className="">O aluno não está matriculado em nenhum curso</p>
      )}
    </div>
  );
}

export default StudentScorePage;
