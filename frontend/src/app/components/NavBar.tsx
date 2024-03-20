'use client'
import React, { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import Menu from './Menu'
import { useAccount, useDisconnect } from 'wagmi'
import FormatService from '../services/FormatService'
import { MdClose } from 'react-icons/md'
import Link from 'next/link'

function NavBar () {
    const [openMenu, setOpenMenu] = useState(false)
    const { disconnect } = useDisconnect()
    const { address, isConnected, status } = useAccount()

    const handleMenu = () => {
        if (openMenu){
            setOpenMenu(false)
        }else {
            setOpenMenu(true)
        }
    }

    return (
        <div className="w-full relative z-50 py-6">
            <div className=" m-auto flex items-center justify-between px-4">
                <div className="flex items-center w-[50%] justify-start ">
                    <div className="">
                        LOGO
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        {/* <Image src={'images.logo'} alt='WR NFT Marketplace' width={75} height={75} /> */}
                    </div>
                </div>
                <div className="flex items-center w-[50%] justify-end">
                    <div className="flex flex-col items-end ">
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
                                        <Menu disconnect={disconnect}/>
                                    </div>
                                }
                            </div>
                        ): (
                            <Link href={'./login'}>Login</Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar