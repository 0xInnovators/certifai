'use client'
import React, { ReactNode, useEffect, useState } from "react";
import ItemMenu from "./ItemMenu";
import {
  MdAssignment,
  MdExitToApp,
  MdLibraryAdd,
  MdLibraryBooks,
} from "react-icons/md";
import { IoIosMedal } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import {
  AcademicManagerSmartContractABI,
  AcademicManagerSmartContractAddress,
} from "../blockchain";
import { useAccount, useReadContract } from "wagmi";

interface MenuProps {
  disconnect: () => void;
}

type Profile = "Student" | "Owner";

interface MenuItem {
  label: string;
  url: string;
  profile: Profile; 
  icon: ReactNode; 
}

function Menu({ disconnect }: MenuProps) {
  const [owner, setOwner] = useState("");
  const { address } = useAccount();

  function handleDisconnect() {
    disconnect();
  }

  const result = useReadContract({
    abi: AcademicManagerSmartContractABI,
    address: AcademicManagerSmartContractAddress  as `0x${string}`,
    functionName: "getOwner",
  });

  useEffect(() => {
    if (result.data) {
      setOwner(result.data as string);
    }
  }, [result]);

  const menuItemsOwner: MenuItem[] = [
    {
      label: "Cadastrar cursos",
      url: "create-course",
      profile: "Owner",
      icon: <MdLibraryAdd />,
    },
    {
      label: "Cursos disponíveis",
      url: "all-courses",
      profile: "Owner",
      icon: <MdLibraryBooks />,
    },
    {
      label: "Meus cursos",
      url: "my-courses",
      profile: "Student",
      icon: <FaGraduationCap />,
    },
    {
      label: "Lançar notas alunos",
      url: "student-score",
      profile: "Owner",
      icon: <MdAssignment />,
    },
    {
      label: "Mintar certificado",
      url: "mint-nft",
      profile: "Student",
      icon: <IoIosMedal />,
    },
  ];

  const menuItemsStudent: MenuItem[] = [
    {
      label: "Cursos disponíveis",
      url: "all-courses",
      profile: "Owner",
      icon: <MdLibraryBooks />,
    },
    {
      label: "Meus cursos",
      url: "my-courses",
      profile: "Student",
      icon: <FaGraduationCap />,
    },
    {
      label: "Mintar certificado",
      url: "mint-nft",
      profile: "Student",
      icon: <IoIosMedal />,
    },
  ];

  return (
    <div className="text-gray-600">
      {address && owner && address === owner && (
        <>
          {menuItemsOwner.map((item, i) => (
            <ItemMenu
              key={i}
              label={item.label}
              url={item.url}
              icon={item.icon}
            />
          ))}
        </>
      )}
      {address && owner && address !== owner && (
        <>
          {menuItemsStudent.map((item, i) => (
            <ItemMenu
              key={i}
              label={item.label}
              url={item.url}
              icon={item.icon}
            />
          ))}
        </>
      )}
      <div
        className="flex w-[240px] justify-center items-center gap-2 hover:text-gray-200 hover:bg-gray-600 transition-all ease-in-out cursor-pointer p-2 rounded-lg"
        onClick={handleDisconnect}
      >
        <MdExitToApp />
        <p className="cursor-pointer w-full">Desconectar</p>
      </div>
    </div>
  );
}

export default Menu;
