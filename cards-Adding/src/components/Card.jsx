import React from 'react'

function Card({ data ,index, onRemoveCard }) {
  return (
    <div className="w-[25%] h-[80%] bg-white rounded-lg shadow-md p-4 relative ">
      <div className='w-[90%] h-[50%] bg-gray-600 m-auto rounded-lg flex items-center justify-center'
      ><img className='w-full h-full object-cover' src={data.image} alt={data.name} /></div>
      <div className='text-black font-semibold text-2xl text-center'>{data.name}</div>
        <div className='text-gray-500 text-xs text-center'>{data.description}</div>
        <div className='text-blue-500 text-lg text-center'>${data.price}</div>
        <button onClick={() => onRemoveCard(index)} className='bg-red-500 text-white absolute bottom-0 left-[50%] transform -translate-x-1/2 translate-y-1/2 px-4 py-2 rounded-lg mt-2'>remove</button>
    </div>
  )
}

export default Card