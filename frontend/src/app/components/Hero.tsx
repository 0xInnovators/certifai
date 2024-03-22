'use client'
import React from 'react'
import Button from './Button'
import Image from 'next/image'
import Images from '../services/Images'
import { FaGraduationCap } from 'react-icons/fa'
import { MdLogin } from 'react-icons/md'
import LinkButton from './LinkButton'
import { useAccount } from 'wagmi'

function Hero() {
    const {address} = useAccount()
    return (
        <div className='flex flex-col md:flex-row-reverse items-center w-full justify-center gap-3'>
            <div className="flex w-full items-center justify-center">
                <div className='w-[100%] m-auto p-4 flex flex-col bg-contain items-center justify-start bg-no-repeat' style={{ backgroundImage: 'url(/images/certifai.png)', backgroundPosition: 'center' }}>
                    <h1 className="md:hidden self-start w-full font-extrabold text-4xl px-4">Bem vindo ao CertifAI</h1>
                    <Image src={Images.dragon} alt='Home image' width={350} height={350} objectFit='cover' />
                </div>
            </div>
            <div className="w-full p-4 gap-6 flex flex-col items-center justify-start">
                <h1 className="hidden md:flex w-full font-extrabold text-4xl px-4">Bem vindo ao CertifAI</h1>
                <h3 className="w-full px-4 text-justify">Aqui, você pode fazer matrículas para diversos cursos disponibilizados pelos professores e, ao fim do curso, caso seja aprovado em todas as disciplinas, poderá mintar um NFT que representa seu certificado de conclusão!</h3>
                <div className="flex flex-row gap-4 w-full px-4 justify-end">
                    <LinkButton color='blue' icon={<FaGraduationCap />} className='w-full' url={'/all-courses'}>Cursos</LinkButton>
                    {
                        !address &&
                        <LinkButton color='gray' icon={<MdLogin />} className='w-full' url={'/login'}>Login</LinkButton>
                    }
                </div>
            </div>
        </div>
    )
}

export default Hero