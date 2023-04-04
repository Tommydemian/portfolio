import React, { ReactNode } from 'react'
import { classNames } from '../utils/classNames'

type TooltipProps = {
    position: string
    content: string
    children?: ReactNode
    visible: boolean
}

const Tooltip = ({position, content, children, visible}: TooltipProps) => {
  return (
    <div id='tooltip' className='relative cursor-pointer group'>
        <div className='mx-2 my-1 '>
            {children}
        </div>
        <span
         className={classNames('absolute bg-neutral-900 text-white text-xs p-2 whitespace-nowrap rounded-[10px]',
          visible ? 'group-hover:inline-block' : 'hidden',
          
          position == 'top' ? 'left-1/2 -translate-x-1/2 bottom-[calc(100% + 5px)]' :'',
          position == 'bottom' ? 'mt-2 left-1/2 -translate-x-1/2 top-[calc(100% + 5px)]' :'',
          position == 'left' ? 'top-1/2 -translate-y-1/2 right-[calc(100% + 5px)]' :'',
          position == 'right' ? 'top-1/2 -translate-y-1/2 left-[calc(100% + 5px)]' :'',
          )}>
            {content}
            </span>
        <span 
        className={classNames('absolute border-[6px]',
        visible ? 'group-hover:inline-block' : 'hidden', 
        
        position == 'top' ? 'left-1/2 -translate-x-1/2 bottom-full border-l-transparent border-r-transparent border-b-0 border-t-neutral-900' : '',
         position == 'bottom' ? 'mt-[2px] left-1/2 -translate-x-1/2 top-full border-l-transparent border-r-transparent border-t-0 border-b-neutral-900' : '',
         position == 'left' ? 'top-1/2 -translate-y-1/2 right-full border-t-transparent border-b-transparent border-r-0 border-l-neutral-900' : '',
         position == 'right' ? 'top-1/2 -translate-y-1/2 left-full border-t-transparent border-b-transparent border-l-0 border-r-neutral-900' : '',
        
        
        
        )}>

        </span>
    </div>
  )
}

export default Tooltip