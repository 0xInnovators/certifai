'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

interface FeaturesProps {
    image: any
    title: string
    to: string
    description: string
    children: React.ReactNode
    reverse?: boolean
}

function Features({ children, image, title, to, description, reverse }: FeaturesProps) {
    const { status } = useAccount()
    const [statusState, setStatusState] = useState<any>('')

    useEffect(() => {
        setStatusState(status)
    }, [status])


    return (
        <div className={`flex flex-col md:flex-row text-gray-300 p-2 gap-6 ${reverse ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full items-center justify-center flex">
                <div className="hidden md:flex">
                    <Image className='' src={image} alt='Feature image' width={250} height={250} objectFit='cover' />
                </div>
                <div className="flex md:hidden">
                    <Image className='' src={image} alt='Feature image' width={300} height={300} objectFit='cover' />
                </div>
            </div>
            <div className="flex flex-col gap-4 w-full p-4">
                <h2 className="w-full">{title}</h2>
                <h3 className="w-full text-3xl font-extrabold">{to}</h3>
                <p className="text-justify font-semibold">{description}</p>
                {statusState ==='connected' && <>
                    {children}
                </>}
            </div>
        </div>
    )
}

export default Features