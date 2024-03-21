import { type ReactNode } from 'react'

interface ButtonProps {
  color: 'blue' | 'gray'
  children: ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  loading?: boolean
  icon?: ReactNode
}

export default function Button(props: ButtonProps): JSX.Element {
  const COLORS = {
    blue: ` bg-primary-color-medium text-gray-200 hover:bg-gray-200 hover:text-primary-color-medium ${props.disabled ? 'bg-gray-200 text-gray-500' : ''}`,
    gray: ` bg-gray-200 text-primary-color-medium hover:bg-primary-color-medium hover:text-gray-200 ${props.disabled ? 'bg-gray-200 text-gray-500' : ''} `
  }
  const baseClasses = `my-3 px-7 py-3 font-bold text-sm min-w-[100px] rounded-lg text-center  transition-all ease-in-out space-x-4 ${props.className ? props.className : ''} ${COLORS[props.color]}`
  return (
    <div className={` ${baseClasses} ${props.disabled ?? props.loading ? 'bg-gray-200 opacity-50 hover:none' : ''} cursor-pointer ${props.loading ? ' cursor-wait ' : ''} ${props.disabled ? ' cursor-not-allowed ' : ''} ${props.disabled ? ' cursor-not-allowed bg-gray-200 opacity-50 hover:disabled hover:shadow-none' : ''} `} onClick={props.onClick}>
      <div className="flex w-full justify-center items-center gap-2">
        <div className="">
          {props.icon}
        </div>
        <button disabled={props.disabled ?? props.loading}>
          {props.children}
        </button>
      </div>
    </div>
  )
}
