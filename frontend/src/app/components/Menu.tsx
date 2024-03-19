'use client'
import React, { ReactNode } from 'react'
import ItemMenu from './ItemMenu';
import { MdAssignment, MdExitToApp, MdLibraryAdd, MdLibraryBooks } from 'react-icons/md';
import { IoIosMedal } from 'react-icons/io';
import { FaGraduationCap } from 'react-icons/fa';

interface MenuProps{
  disconnect: () => void
}

type Profile = 'Student' | 'Owner';

interface MenuItem {
  label: string;
  url: string;
  profile: Profile; // Definindo o tipo do campo profile como Profile
  icon: ReactNode; // Definindo o tipo do campo profile como Profile
}

function Menu({disconnect}: MenuProps) {
  
  function handleDisconnect(){
    disconnect()
  }

  const menuItems: MenuItem[] = [
    {
      label: 'Cadastrar cursos',
      url: 'create-course',
      profile: 'Owner',
      icon: <MdLibraryAdd />
    },
    {
      label: 'Cursos disponíveis',
      url: 'all-courses',
      profile: 'Owner',
      icon: <MdLibraryBooks />
    },
    {
      label: 'Lançar notas alunos',
      url: 'student-score',
      profile: 'Owner',
      icon: <MdAssignment />
    },
    {
      label: 'Meus cursos',
      url: 'my-courses',
      profile: 'Student',
      icon: <FaGraduationCap />
    },
    {
      label: 'Mintar certificado',
      url: 'mint-nft',
      profile: 'Student',
      icon: <IoIosMedal  />
    }
  ]

  return (
    <div className='text-gray-600'>
      {
        menuItems.map((item, i) => (
          <ItemMenu key={i} label={item.label} url={item.url} icon={item.icon}/>
        ))
      }
      <div className="flex w-[240px] justify-center items-center gap-2 hover:text-gray-200 hover:bg-gray-600 transition-all ease-in-out cursor-pointer p-2 rounded-lg" onClick={handleDisconnect}>
        <MdExitToApp  />
        <p className="cursor-pointer w-full">Desconectar</p>
      </div>
    </div>
  )
}

export default Menu