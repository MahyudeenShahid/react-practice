import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../store/Action/UserAction'
import Card from './Card'


function Users() {
        const userData= useSelector((state)=>state.users.value)
        console.log("userData", userData);

        const dispatch = useDispatch()

        useEffect(() => {
                dispatch(fetchUsers())
        }, [])

return (
    <>
    <div className="flex justify-center flex-col items-center h-[20vh]">
        <h1 className="text-4xl font-bold text-gray-800">Users Page</h1>
        <p className="mt-4 text-lg text-gray-600">Manage your users here.</p>
    </div>

    <div className="mt-10 flex  gap-4">
            { userData && userData.map((user) => (
                    <Card key={user.id} user={user} />
            ))}
    </div>
    <hr />
    <Outlet/>
    </>
)
}

export default Users