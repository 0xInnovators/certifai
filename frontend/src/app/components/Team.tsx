import React from 'react'
import TeamCard from './TeamCard'
import Images from "../services/Images"

function Team() {
  return (
    <div className='flex gap-20 mt-16 flex-col md:flex-row md:gap-3 justify-center items-center w-full m-auto'>
        <TeamCard name='Moisés Rabelo' role='Analista UI/UX' github='@moisesrlima' instagram='@eusoumoisesrabelo' image={Images.vinicius} linkedin='@moisesrlimadesigndf' />
        <TeamCard name='Vinicius Feitosa' role='Arquiteto de soluções' github='@oviniciusfeitosa' instagram='@oviniciusfeitosa' image={Images.vinicius} linkedin='@oviniciusfeitosa' />
        <TeamCard name='Willian Rios' role='Dev Web3' github='@williangrios' instagram='@williangrios' image={Images.willian} linkedin='@solidity-dev' />
    </div>
  )
}

export default Team