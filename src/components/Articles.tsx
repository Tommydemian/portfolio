import React from 'react'
import { Icon } from '@iconify/react';

const Articles = () => {
  return (
    <div>
      <a className='my-4 text-left text-sm sm:text-base cursor-pointer text-[#6bb7d6] underline' target="_blank" href="https://medium.com/@tomasgilamoedo/coerci%C3%B3n-deber%C3%ADa-o-no-deber%C3%ADa-permitirla-en-mis-comparaciones-6a380de61b5">
      <Icon icon="material-symbols:arrow-drop-down-rounded" color="#6bb7d6" className='w-10 h-10 inline' />
        Coerción ¿Debería o no debería permitirla en mis comparaciones de igualdad?
        </a>
      <a className='text-sm sm:text-base  mb-2 cursor-pointer text-[#6bb7d6] underline block' target="_blank" href="https://dev.to/tommydemian/javascript-closures-and-custom-iterators-a-comprehensive-guide-5a0m">
      <Icon icon="material-symbols:arrow-drop-down-rounded" color="#6bb7d6" className='w-10 h-10 inline' />
        JavaScript Closures and Custom Iterators: A Comprehensive Guide.
        </a>
    </div>
  )
}

export default Articles