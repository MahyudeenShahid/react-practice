// import { useState } from 'react'

import { use } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react"

function App() {
  
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const passwordgenerator = useCallback(() => {
    let pass= "";
    let str = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) {
      str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumbers) {
      str += "0123456789";
    }
    if (includeSymbols) {
      str += "!@#$%^&*()_+[]{}|;:,.<>?";
    }
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setPassword(pass);
  }, [length, includeUppercase, includeNumbers, includeSymbols,setPassword]);

function copyPass() {
  if (!password) {
    alert("Please generate a password first");
    return;
  }
  inputRef.current.select();
  inputRef.current.setSelectionRange(0, 99); // For mobile devices
  window.navigator.clipboard.writeText(password);

}
useEffect(passwordgenerator
, [length, includeUppercase, includeNumbers, includeSymbols]);

  const inputRef = useRef(null);
  return (
    <><div className='w-screen   mx-auto flex flex-col items-center justify-center h-screen bg-gray-800'>
      <div className='text-white text-xl text-center '>Password Generator</div>
      <div className='text-white text-lg text-center'>Generate a secure password</div>
      <div className='text-white text-lg text-center'>Click the button below to generate a new password</div>
      <div className='flex  items-center justify-center mt-4'>
      <input
        type='text'
        className='mt-4 p-2 rounded bg-gray-700 text-white w-70'
        placeholder='Generated Password'
        value={password}
        readOnly

        ref={inputRef}
        ></input>
        <button onClick={copyPass} className="bg-blue-500 text-black px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-colors">copy</button>
      </div>
        <div className='flex space-x-4 items-center mt-4'>
          <input onChange={(e) => setLength(e.target.value)} type="range" name="passwordLength" id="passwordLength" min="6" max="28" />
          <label htmlFor="passwordLength" className='text-white ml-2'>Password Length {length}</label>
          <input onChange={(e) => setIncludeUppercase(e.target.checked)} type="checkbox" name="includeUppercase" id="includeUppercase" />
          <label htmlFor="includeUppercase" className='text-white ml-2'>Include Uppercase</label>
          <input onChange={(e) => setIncludeNumbers(e.target.checked)} type="checkbox" name="includeNumbers" id="includeNumbers" />
          <label htmlFor="includeNumbers" className='text-white ml-2'>Include Numbers</label>
          <input onChange={(e) => setIncludeSymbols(e.target.checked)} type="checkbox" name="includeSymbols" id="includeSymbols" />
          <label htmlFor="includeSymbols" className='text-white ml-2'>Include Symbols</label>
        </div>
      <button onClick={passwordgenerator} className='bg-blue-500 text-black px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-colors'>
        Generate New Password
      </button>
      </div>
    </>
  )
}

export default App
