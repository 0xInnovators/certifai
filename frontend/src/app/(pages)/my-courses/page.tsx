'use client'
import MyCourses from '@/app/components/MyCourses'
import PageTitle from '@/app/components/PageTitle'
import React, { useEffect } from 'react'
import { useAccount } from 'wagmi'
import { useRouter } from "next/navigation";

function MyCoursesPage() {
  const {address}  = useAccount()
  const router = useRouter()

  useEffect(() => {
    if (!address) router.push('/')
  }, [address, router])

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