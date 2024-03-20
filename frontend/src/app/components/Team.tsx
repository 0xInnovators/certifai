import React from 'react'
import TeamCard from './TeamCard'
import Images from "../services/Images"

function Team() {
  return (
    <div className='flex gap-20 mt-16 flex-col md:flex-row md:gap-3 justify-center items-center w-full m-auto'>
        <TeamCard name='Moisés Rabelo' role='Analista UI/UX' github='@moisesrlima' instagram='@eusoumoisesrabelo' image={Images.moises} linkedin='@moisesrlimadesigndf' />
        <TeamCard name='Moisés Rabelo' role='Analista UI/UX' github='@moisesrlima' instagram='@eusoumoisesrabelo' image={Images.vinicius} linkedin='@moisesrlimadesigndf' />
        <TeamCard name='Moisés Rabelo' role='Analista UI/UX' github='@moisesrlima' instagram='@eusoumoisesrabelo' image={Images.willian} linkedin='@moisesrlimadesigndf' />
    </div>
  )
}

export default Team