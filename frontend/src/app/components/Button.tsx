import { type ReactNode } from 'react'

interface ButtonProps {
  color: 'orange' | 'pink'
  children: ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  loading?: boolean
  icon?: ReactNode
}

export default function Button (props: ButtonProps): JSX.Element {
  const COLORS = {
    pink: ` bg-primary-color-strong text-white  ${props.disabled ? '' : ' hover:bg-primary-color-medium hover:shadow-primary-color-light'} `,
    orange: ` bg-secondary-color-strong text-white ${props.disabled ? '' : ' hover:bg-secondary-color-medium hover:shadow-secondary-color-light '} `
  }
  const baseClasses = `my-3 px-7 py-3 font-bold text-sm min-w-[100px] rounded-lg text-center hover:shadow-lg transition-all ease-in-out space-x-4 ${props.className ? props.className : ''} ${COLORS[props.color]}`
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
