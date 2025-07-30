import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Counter App</h1>
          <p className="text-xl mb-4">Count: {count}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button> 
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ml-2"
            onClick={() => setCount(0)}
          >
            Reset             
          </button>
        </div>
      </div>
    </>
  )
}

export default App
