import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Card from './Card'
// import axios from 'axios'
import axios from '../Utils/axios'
import { userContext } from '../Context/Context'
function Users() {

      const {data, setdata , getdata}=  useContext(userContext)
        
        useEffect(() => {
            

            getdata();

        }, []);

       

return (
    <>
    <div className="flex justify-center flex-col items-center h-[20vh]">
        <h1 className="text-4xl font-bold text-gray-800">Users Page</h1>
        <p className="mt-4 text-lg text-gray-600">Manage your users here.</p>
    </div>
<div className='flex flex-wrap items-center justify-center gap-4 p-4'>
     {data.map((product, index) => (
        <Card key={index} product={product} index={index}  />
    ))}
    <hr />
    </div>
    </>
)
}

export default Users