'use client'
import { AcademicManagerSmartContractABI, AcademicManagerSmartContractAddress } from '@/app/blockchain';
import Button from '@/app/components/Button';
import PageTitle from '@/app/components/PageTitle'
import React, { useState } from 'react'
import { useReadContract, useWriteContract } from 'wagmi';

function StudentScorePage() {
  const inputClasses =
  "p-2 bg-gray-200 rounded-lg border-gray-700 border outline-none w-full text-gray-600";
  const [studentWallet, setStudentWallet] = useState("");
  const [courseId, setCourseId] = useState("");
  // const { writeContract } = useWriteContract() 
  const { readContract } = useReadContract() 

  function handleFindScores(){
    if (courseId.length <4 ){
      // alert('Digite um nome para o curso')
      return
    }
    if (studentWallet.length <4 ){
      // alert('Digite a descrição do curso')
      return
    }
    readContract({ 
      address: AcademicManagerSmartContractAddress, 
      abi: AcademicManagerSmartContractABI, 
      functionName: 'getStudentRecords', 
      args: [studentWallet, courseId], 
    }) 
  }

  return (
    <div>
      <PageTitle title='Lançar notas dos alunos' subtitle='Aqui, você atualiza a situação do aluno de acordo com suas notas!' />
      <form className='p-2'>
          <div className="">
            <label htmlFor="name" className="block">
              Id do curso que o aluno está matriculado
            </label>
            <div>
              <input
                type="text"
                placeholder="Id do curso"
                className={inputClasses}
                required
                onChange={(e) => setCourseId(e.target.value)}
                value={courseId}
              />
            </div>
          </div>
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
          <Button color='pink' onClick={() => {}}>Buscar Histórico do aluno</Button>
        </form>
    </div>
  )
}

export default StudentScorePage