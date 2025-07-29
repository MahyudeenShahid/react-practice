import React from 'react'

function Nav({product}) {
  return (
    <nav className='w-full  bg-gray-500 h-16 flex items-center justify-between px-4'>
        <h1 className='text-white text-xl '>Mahyudeen</h1>
        <div className='text-white flex items-center gap-2 px-2 py-1 bg-green-500 rounded-md'>
            <span>Cart</span>
            <span>{product.filter((data)=>data.added).length}</span>
        </div>
    </nav>
  )
}

export default Nav