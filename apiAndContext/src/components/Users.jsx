import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Users() {
return (
    <>
    <div className="flex justify-center flex-col items-center h-[20vh]">
        <h1 className="text-4xl font-bold text-gray-800">Users Page</h1>
        <p className="mt-4 text-lg text-gray-600">Manage your users here.</p>
    </div>

    <div className="mt-10 flex  gap-4">
            {["Alice", "Bob", "Charlie", "Diana", "Eve"].map((user) => (
                    <div 
                            key={user}
                            className="flex items-center justify-between bg-white shadow rounded-lg px-6 py-4 hover:bg-blue-50 transition"
                    >
                            <Link
                                    to={`/users/${user.toLowerCase()}`}
                                    className="text-blue-600 font-semibold text-lg hover:underline"
                            >
                                    {user}
                            </Link>
                            
                    </div>
            ))}
    </div>
    <hr />
    <Outlet/>
    </>
)
}

export default Users