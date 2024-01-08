import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [charlength, setCharLength] = useState(false)
  const [numberlength, setNumberLength] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef=useRef(null)

  const copyPasswordToClipboard = useCallback(() => { 
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,15);
    window.navigator.clipboard.writeText(password)
    
  }
    , [password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberlength) str += "0123456789"
    if (charlength) str += "!#$%^&*{}+-=~`_"

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, charlength, numberlength, setPassword]) // setpassword is used for memorization /optimization/cache

  useEffect(() => {
    passwordGenerator()
  }, [length, charlength, numberlength, passwordGenerator])
  
  return (
    <div className='bg-black text-white h-screen '>
      <h1 className='text-center pt-5 text-4xl'>Password Generator</h1>
      <div className='text-center p-2 mt-4 border-solid border-2 border-indigo-800 w-[40%] mx-auto flex rounded-lg'>

        <input
          type="text"
          value={password}
          placeholder='Password'
          className='p-4 text-xl w-full rounded-l-lg outline-none text-black'
          readOnly
          ref={passwordRef}
        />
        <button
          type="submit"
          onClick={copyPasswordToClipboard}
          className='bg-green-800 text-xl rounded-r-lg p-2 cursor-pointer'
        >copy</button>
      </div>

      <div className='mx-auto w-[40%] mt-4'>

        <input type="range"
          min={6}
          max={15}
          value={length}
          className='cursor-pointer bg-blue-600'
          onChange={(e) => { setLength(e.target.value) }}
        />
        <label className='pr-5'>Length:{length}</label>

        <input
          type="checkbox"
          defaultChecked={numberlength}
          id='numberInput'
          onChange={() => { setNumberLength((prev) => !prev) }}
        />
        <label className='pr-5'>Charactor</label>

        <input
          type="checkbox"
          defaultChecked={charlength}
          id='charactrerInput'
          onChange={()=>{setCharLength((prev)=>!prev)}}
        />
        <label>Number</label>

      </div>
    </div>
  )
}

export default App
