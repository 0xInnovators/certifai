import Link from 'next/link'
import { type ReactNode } from 'react'

interface LinkButtonProps {
  color: 'blue' | 'gray'
  children: ReactNode
  url: string
  className?: string
  disabled?: boolean
  loading?: boolean
  icon?: ReactNode
}

export default function LinkButton(props: LinkButtonProps): JSX.Element {
  const COLORS = {
    blue: ` bg-primary-color-medium text-gray-200 hover:bg-gray-200 hover:text-primary-color-medium ${props.disabled ? 'bg-gray-200 text-gray-500' : ''}`,
    gray: ` bg-gray-200 text-primary-color-medium hover:bg-primary-color-medium hover:text-gray-200 ${props.disabled ? 'bg-gray-200 text-gray-500' : ''} `
  }
  const baseClasses = `my-3 px-7 py-3 font-bold border border-gray-200 text-sm min-w-[100px] rounded-lg text-center  transition-all ease-in-out space-x-4 ${props.className ? props.className : ''} ${COLORS[props.color]}`
  return (
    <Link href={props.url}>
      <div className={` ${baseClasses} ${props.disabled ?? props.loading ? 'bg-gray-200 opacity-50 hover:none' : ''} cursor-pointer ${props.loading ? ' cursor-wait ' : ''} ${props.disabled ? ' cursor-not-allowed ' : ''} ${props.disabled ? ' cursor-not-allowed bg-gray-200 opacity-50 hover:disabled hover:shadow-none' : ''} `}>
        <div className="flex w-full justify-center items-center gap-2">
          <div className="">
            {props.icon}
          </div>
            {props.children}
        </div>
      </div>
    </Link>
  )
}
