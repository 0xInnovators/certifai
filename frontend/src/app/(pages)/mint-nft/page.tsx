"use client";
import {
  AcademicManagerSmartContractABI,
  AcademicManagerSmartContractAddress,
} from "@/app/blockchain";
import React, { useEffect, useState } from "react";
import { readContract } from "@wagmi/core";
import { config } from "@/app/blockchain/config";
import { useAccount } from "wagmi";
import StudentMint from "@/app/components/StudentMint";
import { useRouter } from "next/navigation";
import SectionTitle from "@/app/components/SectionTitle";

function MintNftPage() {
  const [studentCourses, setStudentCourses] = useState<any | null>(null);
  const { address } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (!address) router.push("/");
  }, [address, router]);

  useEffect(() => {
    async function handleFindStudentCourses() {
      const result = await readContract(config, {
        address: AcademicManagerSmartContractAddress as `0x${string}`,
        abi: AcademicManagerSmartContractABI,
        functionName: "getCoursesByStudent",
        args: [address],
      });
      setStudentCourses(result);
    }
    if (address){
      handleFindStudentCourses();
    }
  }, [address]);

  return (
    <div>
      <SectionTitle title="Mintar certificados em NFTs" />
      {studentCourses && address && (
        <div className="p-2 flex flex-col gap-2">
          {studentCourses.map((courseEnrolled: any, i: number) => (
            <StudentMint
              studentWallet={address}
              key={i}
              courseEnrolled={courseEnrolled}
            />
          ))}
        </div>
      )}
      {studentCourses?.length === 0 && (
        <p className="">Você ainda não possui nenhuma matrícula</p>
      )}
    </div>
  );
}

export default MintNftPage;
