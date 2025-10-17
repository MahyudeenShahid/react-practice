import React, { useState } from 'react'
import Button from './Button';

function Nav() {
    const [clor, setclor] = useState("black");
  return (
    <>
    <div style={{backgroundColor: clor}} className='w-full h-screen duration-200'> </div>
    <div className=" inset-x-0 flex justify-center fixed bottom-12 flex-wrap p-3">
    <div className='flex justify-center space-x-4 items-center bg-amber-50 rounded-full px-10 py-2 border-2 shadow-lg'>
        <Button onClick={()=>{setclor("red")}}  color="red"/>
        <Button onClick={()=>{setclor("green")}}  color="green"/>
        <Button onClick={()=>{setclor("blue")}}  color="blue"/>
        <Button onClick={()=>{setclor("black")}}  color="black"/>
        <Button onClick={()=>{setclor("yellow")}}  color="yellow"/>
        <Button onClick={()=>{setclor("purple")}}  color="purple"/>
        <Button onClick={()=>{setclor("pink")}}  color="pink"/>
        <Button onClick={()=>{setclor("orange")}}  color="orange"/>
        <Button onClick={()=>{setclor("gray")}}  color="gray"/>
        <Button onClick={()=>{setclor("white")}}  color="white"/>
    </div></div>
     </>
  )
}

export default Nav