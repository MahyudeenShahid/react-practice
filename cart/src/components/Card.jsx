import React from 'react'

function Card({product, index,clickHandler}) {
    const { name, description, price, image, added } = product;
  return (
    <div className='bg-white shadow-md rounded-md p-4 w-52 h-auto mt-5 relative '>
        <div className='w-full h-36 bg-amber-400 rounded-md mb-2.5 overflow-hidden'>
            <img className='w-full h-full object-cover' src={image} alt=""  />
        </div>
      <h2 className='text-lg font-semibold'>{name}</h2>
      <p className='text-gray-600'>{description}</p>
      <div className='mt-4 flex items-center justify-between'>
        <p className='text-xl font-bold mb-2.5'>{`$ ${price}`}</p>
        <button className={` text-white px-4 py-2 font-semibold rounded-md whitespace-nowrap absolute bottom-0 ${added ? 'bg-red-500' : 'bg-green-500'} transform translate-y-[50%] left-[50%] -translate-x-[50%]`} onClick={() => clickHandler(index)}>{added ? 'Remove from Cart' : 'Add to Cart'}</button>
      </div>
    </div>
  )
}

export default Card