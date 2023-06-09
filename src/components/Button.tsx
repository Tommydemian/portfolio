import React, { ReactNode } from 'react'
import { classNames } from '../utils/classNames'
import { ButtonType } from '../types/index'

type ButtonProps = {
    icon?: string
    rounded?: boolean
    halfWidth?: boolean
    children: ReactNode
    primary?: boolean
    secondary?: boolean
    onClick?:
        | ((event: React.MouseEvent<HTMLButtonElement>) => void)
        | undefined;
    type?: ButtonType | undefined
}

const Button = ({children, rounded, halfWidth, primary, secondary, onClick, type }: ButtonProps) => {
  return (
    <button onClick={onClick} className={classNames('py-2 px-5 text-[13px] sm:text-base font-bold cursor-pointer select-none outline-none shadow-md disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-100 disabled:shadow-inner inline-flex items-center justify-center',
    rounded ?'rounded-[10px]': '',
    halfWidth ? 'w-1/2' :'',
    primary ? ' bg-pumpkin rounded-[10px] text-russet' : '',
    secondary ? 'bg-lightblue text-charcoal' : '' 
    )} 
    type={type}
    >
        {children}
    </button>
  )
}

export default Button