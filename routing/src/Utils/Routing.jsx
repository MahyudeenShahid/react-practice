import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Services from '../components/Services'
import Users from '../components/Users'
import Profile from '../components/Profile'

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/users' element={<Users />} >
        <Route path="/users/:username" element={<Profile />} />
        </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      </Routes>
  )
}

export default Routing