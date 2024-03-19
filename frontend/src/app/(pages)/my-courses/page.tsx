'use client'
import MyCourses from '@/app/components/MyCourses'
import PageTitle from '@/app/components/PageTitle'
import React from 'react'
import { useAccount } from 'wagmi'

function MyCoursesPage() {
  const {address} = useAccount()
  return (
    <div>
      <PageTitle title='Meus cursos' subtitle='Abaixo a relação de cursos em que você se matriculou!' />
      {
        address &&
          <MyCourses address={address}/>
      }
    </div>
  )
}

export default MyCoursesPage