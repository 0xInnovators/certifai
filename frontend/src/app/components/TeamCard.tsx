import Image from 'next/image'
import React from 'react'

interface TeamCardProps{
    name: string
    role: string
    github: string
    linkedin: string
    instagram: string
    image: any
}

function TeamCard({name, image, role, github, linkedin, instagram}: TeamCardProps) {
  return (
    <div className='flex flex-col bg-primary-color-medium w-72 h-72 rounded-2xl p-3 text-center items-center text-gray-100'>
        <Image src={image} className='mt-[-60px] rounded-full' alt='Team Image' width={110} height={110} objectFit='cover'/>
        <h3 className="text-xl font-extrabold my-8">{name}</h3>
        <p className="font-extrabold">{role}</p>
        <p className="">Github: {github}</p>
        <p className="">LinkedIn: {linkedin}</p>
        <p className="">Instagram: {instagram}</p>
    </div>
  )
}

export default TeamCard