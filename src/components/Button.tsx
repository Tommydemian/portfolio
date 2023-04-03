import React, { ReactNode } from 'react'
import { classNames } from '../utils/classNames'
import { MouseEventHandler } from 'react'

type ButtonProps = {
    icon?: string
    rounded?: boolean
    children: ReactNode
    primary?: boolean
    secondary?: boolean
    onClick?:
        | ((event: React.MouseEvent<HTMLButtonElement>) => void)
        | undefined;
}

const Button = ({children, rounded, primary, secondary, onClick}: ButtonProps) => {
  return (
    <button onClick={onClick} className={classNames('py-2 px-5 cursor-pointer select-none outline-none shadow-md disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-100 disabled:shadow-inner inline-flex items-center justify-center',
     rounded ?'rounded-[10px]': '',
     primary ? ' bg-pumpkin rounded-[10px] text-russet' : '',
     secondary ? 'bg-lightblue text-charcoal' : '' 
     )} 
    >
        {children}
    </button>
  )
}

export default Button