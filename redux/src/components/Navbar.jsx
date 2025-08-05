import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex justify-between text-2xl w-full h-[10vh] font-semibold text-zinc-500 items-center bg-gray-800 p-4 ">
       
        <NavLink className={(e)=>{
          return [e.isActive ? "text-red-500" : "",
            e.isPending ? "font-extrabold" : ""].join(" ")
          }
        } to="/">
            Home
        </NavLink>
        <NavLink className={(e)=>{
          return [e.isActive ? "text-red-500" : "",
            e.isPending ? "font-extrabold" : ""].join(" ")
          }
        } to="/about">
            About
        </NavLink>
        <NavLink className={(e)=>{
          return [e.isActive ? "text-red-500" : "",
            e.isPending ? "font-extrabold" : ""].join(" ")
          }
        } to="/contact">
            Contact
        </NavLink>
        <NavLink className={(e)=>{
          return [e.isActive ? "text-red-500" : "",
            e.isPending ? "font-extrabold" : ""].join(" ")
          }
        } to="/users">
            Users
        </NavLink>
        <NavLink className={(e)=>{
          return [e.isActive ? "text-red-500" : "",
            e.isPending ? "font-extrabold" : ""].join(" ")
          }
        } to="/services">
            Services
        </NavLink>
    </div>
  )
}

export default Navbar   