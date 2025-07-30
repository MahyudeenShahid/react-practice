import { useState } from 'react'
import Navbar from './components/Navbar'
import Routing from './Utils/Routing'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routing />
    </>
  )
}

export default App
