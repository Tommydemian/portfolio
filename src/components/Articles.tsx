import React from 'react'
import { Icon } from '@iconify/react';

const Articles = () => {
  return (
    <div className='my-20 text-stone-900 dark:text-white px-2 max-w-prose w-auto mx-auto'>       
      <h2 className='font-bold text-xl mb-2'>Articles I wrote:</h2>
      <p className='mb-2'>Behold, my humble collection of literary works. Though these pieces did not receive the adoration they were due, the process of refining my thoughts and conveying them in a coherent manner proved to be a valuable exercise in itself.</p>
      <a className='mb-2 cursor-pointer text-[#6bb7d6] underline' target="_blank" href="https://medium.com/@tomasgilamoedo/coerci%C3%B3n-deber%C3%ADa-o-no-deber%C3%ADa-permitirla-en-mis-comparaciones-6a380de61b5">
      <Icon icon="material-symbols:arrow-drop-down-rounded" color="#6bb7d6" className='w-10 h-10' />
        Coerción ¿Debería o no debería permitirla en mis comparaciones de igualdad?
        </a>
      <a className='mb-2 cursor-pointer text-[#6bb7d6] underline' target="_blank" href="https://dev.to/tommydemian/javascript-closures-and-custom-iterators-a-comprehensive-guide-5a0m">
      <Icon icon="material-symbols:arrow-drop-down-rounded" color="#6bb7d6" className='w-10 h-10' />
        JavaScript Closures and Custom Iterators: A Comprehensive Guide.
        </a>
    </div>
  )
}

export default Articles