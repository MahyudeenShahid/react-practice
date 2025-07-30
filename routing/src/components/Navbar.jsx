import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex justify-between text-2xl w-full h-[10vh] font-semibold text-zinc-500 items-center bg-gray-800 p-4 ">
       
        <NavLink to="/">
            Home
        </NavLink>
        <NavLink to="/about">
            About
        </NavLink>
        <NavLink to="/contact">
            Contact
        </NavLink>
        <NavLink to="/services">
            Services
        </NavLink>
    </div>
  )
}

export default Navbar   