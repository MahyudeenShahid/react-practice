import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Profile() {
    const { username } = useParams()
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }
    
  return (

        <div className="flex justify-center flex-col items-center h-[90vh]">
            <h1 className="text-4xl font-bold text-gray-800">Profile Page</h1>
            <p className="mt-4 text-lg text-gray-600">View and edit your profile information here.</p>
            <h2 className="mt-8 text-2xl font-semibold text-gray-800">Profile Details</h2>
            <p className="mt-2 text-lg text-gray-600">Name: { username }</p>
            <p className="mt-2 text-lg text-gray-600">Email: { username }@example.com</p>
            <p className="mt-2 text-lg text-gray-600">Bio: A brief description about { username }.</p>
            <button onClick={back} className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow transition">
                go back  
            </button>
    </div>
  )
}

export default Profile