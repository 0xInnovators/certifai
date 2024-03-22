'use client'
import MyCourses from '@/app/components/MyCourses'
import React, { useEffect } from 'react'
import { useAccount } from 'wagmi'
import { useRouter } from "next/navigation";
import SectionTitle from '@/app/components/SectionTitle'

function MyCoursesPage() {
  const {address}  = useAccount()
  const router = useRouter()

  useEffect(() => {
    if (!address) router.push('/')
  }, [address, router])

  return (
    <div>
      <SectionTitle title="Meus cursos" />
      {
        address &&
          <MyCourses address={address}/>
      }
    </div>
  )
}

export default MyCoursesPage