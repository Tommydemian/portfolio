import React, { ReactNode } from 'react'
import { classNames } from '../utils/classNames'

type ButtonProps = {
    icon?: string
    rounded?: boolean
    children: ReactNode
    primary?: boolean
    secondary?: boolean

}

// const className = classNames(
//      [
//         'py-2 px-5 cursor-pointer select-none outline-none shadow-md',
//         'disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-100 disabled:shadow-inner',
//         'bg-pumpkin rounded-[10px] text-russet'
//       ]
//     )

const Button = ({children, rounded, primary, secondary}: ButtonProps) => {
  return (
    <button className={classNames('py-2 px-5 cursor-pointer select-none outline-none shadow-md disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-100 disabled:shadow-inner inline-flex items-center justify-center',
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