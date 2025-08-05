import React from 'react'

function Card({user, index, clickHandler}) {
    const { id, username, email, avatar } = user;
  return (
    <div className='bg-white shadow-md rounded-md p-4 w-52 h-auto mt-5 relative '>
        <div className='w-full h-36 bg-amber-400 rounded-md mb-2.5 overflow-hidden'>
            <img className='w-full h-full object-fit' src={avatar} alt=""  />
        </div>
      <h2 className='text-lg font-semibold'>{username}</h2>
      <p className='text-gray-600'>{email}</p>
      <div className='mt-4 flex items-center justify-between'>
        <p className='text-xl font-bold mb-2.5'>{`$ ${id}`}</p>
      </div>
    </div>
  )
}

export default Card