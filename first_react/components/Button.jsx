// import React from 'react';
import React, { useState } from 'react'

function Button(props) {
    
  return (
    <>
    
    <button onClick={props.onClick} className='text-xl px-4 py-1 outline-none rounded-full text-white shadow-lg  ' style={{backgroundColor : props.color}} >{props.color}</button>
    </>
  )
}

export default Button