import React from 'react'

type OverlayDescriptionProps = {
  description: string
}

const OverlayDescription = ({ description }: OverlayDescriptionProps) => {
  return (
    <div className='abosulte bottom-0 left-0 right-0' >
        <p 
          style={{position:'absolute', bottom:'.7em', left: '0', right: '0', lineHeight: '1.5em'}}
          className="text-sm md:text-base  text-white font-semibold bg-black/40 rounded-b-2xl px-4 py-4"
          >{description} </p>
    </div>
  )
}

export default OverlayDescription