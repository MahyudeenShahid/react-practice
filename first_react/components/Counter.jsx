import React from 'react'
import { useState } from 'react'


function Counter() {
    let [count, setcount] = useState(10);

    function increament(){
     setcount (++count);
    }
    function decreament() {
        if (count === 0) {
            alert("Counter can't be less than 0");
            return;
        }
        setcount(--count)
    }

  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500'>
    <div className='text-4xl text-center text-amber-300 mb-[10vh] mt-[10vh]  ' >Counter : {count}</div>
    <div className='flex justify-around'>
    <button onClick={increament} className='bg-green-500 p-3  rounded-4xl '>increament</button>
    <button onClick={decreament} className='bg-red-500 p-3 rounded-4xl'>decrement</button>
    </div> 

    </div>
    </>

  )
}

export default Counter