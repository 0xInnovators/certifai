import React from 'react'
import TeamCard from './TeamCard'
import Images from "../services/Images"
import SectionTitle from './SectionTitle'

function Team() {
  return (
    <div id='team' className="flex flex-col items-center justify-center gap-12 mt-10">
      <SectionTitle title='Somos o time que transforma ideias em inovação, desafios em oportunidades e estudos em diversão!' />
      <p className="w-full text-center text-gray-200">Time 0xInnovators</p>
      <div className='flex gap-20 mt-16 flex-col md:flex-row md:gap-3 justify-center items-center w-full m-auto'>
        <TeamCard name='Moisés Rabelo' role='Analista UI/UX' github='@moisesrlima' instagram='@eusoumoisesrabelo' image={Images.moises} linkedin='@moisesrlimadesigndf' />
        <TeamCard name='Vinicius Feitosa' role='Arquiteto de soluções' github='@oviniciusfeitosa' instagram='@oviniciusfeitosa' image={Images.vinicius} linkedin='@oviniciusfeitosa' />
        <TeamCard name='Willian Rios' role='Dev Web3' github='@williangrios' instagram='@williangrios' image={Images.willian} linkedin='@solidity-dev' />
      </div>
    </div>
  )
}

export default Team