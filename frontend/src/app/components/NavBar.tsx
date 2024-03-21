'use client'
import React, { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import Menu from './Menu'
import { useAccount, useDisconnect } from 'wagmi'
import FormatService from '../services/FormatService'
import { MdClose, MdLogin } from 'react-icons/md'
import Link from 'next/link'
import Images from '../services/Images'
import Image from 'next/image'

function NavBar() {
    const [openMenu, setOpenMenu] = useState(false)
    const { disconnect } = useDisconnect()
    const { address, isConnected, status } = useAccount()

    const handleMenu = () => {
        if (openMenu) {
            setOpenMenu(false)
        } else {
            setOpenMenu(true)
        }
    }

    return (
        <div className="w-full relative z-50 py-6">
            <div className=" m-auto flex items-center justify-between px-4">
                <div className="flex items-center w-[50%] justify-start ">
                    <Link href='/'>
                        <div className="flex items-center gap-3">
                            <Image src={Images.logo} alt='CertifAI' width={75} height={75} />
                            <h1 className="text-xl hover:scale-110 transition-all ease-in-out font-extrabold md:text-2xl">CertifAI NFT</h1>
                        </div>
                    </Link>
                </div>
                <div className="flex items-center w-[50%] justify-end">
                    <div className="flex flex-row items-center gap-6 ">
                        <Link className='hidden lg:block text-center transition-all ease-in-out hover:scale-110' href='#howitworks'>Como funciona</Link>
                        <Link className='hidden lg:block text-center transition-all ease-in-out hover:scale-110' href='#courses'>Cursos</Link>
                        <Link className='hidden lg:block text-center transition-all ease-in-out hover:scale-110' href='#team'>Time</Link>

                        {address ?
                            (
                                <div className='flex flex-row justify-end'>
                                    <div className="flex gap-3 items-center">
                                        <span className="rounded-lg gap-2 flex flex-row items-center p-2 bg-slate-500 text-white">Conectado com {FormatService.formatAddress(address ? address as string : '')}</span>
                                        {
                                            !openMenu ? (
                                                <CgMenuRight onClick={(e) => { handleMenu() }} className='w-8 h-8 cursor-pointer' />
                                            ) : (
                                                <MdClose onClick={(e) => { handleMenu() }} className='w-8 h-8 cursor-pointer' />
                                            )
                                        }
                                    </div>
                                    {openMenu &&
                                        <div className="absolute mt-10 z-10 flex flex-col bg-gray-200 shadow-right-bottom rounded-xl p-3">
                                            <Menu disconnect={disconnect} />
                                        </div>
                                    }
                                </div>
                            ) : (
                                <Link href={'./login'} className='bg-gray-200 text-primary-color-medium  hover:bg-primary-color-medium hover:text-gray-200 transition-all ease-in-out gap-3 px-6 py-3 rounded-xl flex items-center'>
                                    <MdLogin />
                                    Login
                                </Link>
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar