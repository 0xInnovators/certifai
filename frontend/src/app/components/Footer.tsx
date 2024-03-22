import Image from 'next/image'
import React from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'
import SocialMedia from './SocialMedia'
import Images from "@/app/services/Images"
import { AcademicManagerSmartContractAddress, CertificateNFTSmartContractAddress } from '../blockchain'
import FormatService from '../services/FormatService'

function Footer() {
    return (
        <div className="flex flex-col justify-start items-center md:flex-row md:justify-around md:items-start w-full gap-20 md:gap-0 py-10 mt-16">
            <div className="flex w-full max-w-[400px] md:w-[30%] flex-col gap-3 items-center justify-center ">
                <p className="w-full font-extrabold">Smart contracts</p>
                <p className="w-full">Academic Manager: {FormatService.formatAddress(AcademicManagerSmartContractAddress ?? '')}</p>
                <p className="w-full">CertifAI NFT: {FormatService.formatAddress(CertificateNFTSmartContractAddress ?? '')}</p>
            </div>
            <div className="flex w-full max-w-[400px] md:w-[30%] flex-col gap-6 items-center justify-center ">
                <Image src={Images.logo} alt='Footer logo' height={100} width={100} />
                <p className="m-auto md:mx-6 text-justify text-gray-200 font-semibold text-xl">CertifAI</p>
                <SocialMedia />
            </div>
            <div className="w-full max-w-[400px] md:w-[30%] flex flex-col gap-4">
                <h3 className="">Receba nossas newsletter</h3>
                <div className="flex gap-1 items-center justify-between rounded-full px-4 py-2 bg-gray-700">
                    <input type='email' className='grow text-sm outline-none max-w-[75%] bg-transparent text-white' placeholder='Enter your email*' />
                    <RiSendPlaneFill className='text-white cursor-pointer h-4 w-4 mr-2 my-2 hover:scale-125 transition-all ease-in-outs' />
                </div>
            </div>
        </div>
    )
}

export default Footer