import React from 'react'

function Card({product, index,clickHandler}) {
    const { title, description, price, image, added } = product;
  return (
    <div className='bg-white shadow-md rounded-md p-4 w-52 h-auto mt-5 relative '>
        <div className='w-full h-36 bg-amber-400 rounded-md mb-2.5 overflow-hidden'>
            <img className='w-full h-full object-fit' src={image} alt=""  />
        </div>
      <h2 className='text-lg font-semibold'>{title}</h2>
      <p className='text-gray-600'>{description}</p>
      <div className='mt-4 flex items-center justify-between'>
        <p className='text-xl font-bold mb-2.5'>{`$ ${price}`}</p>
      </div>
    </div>
  )
}

export default Card