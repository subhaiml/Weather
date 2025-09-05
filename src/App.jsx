import { useState } from 'react'
import './App.css'
import City from './City'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center p-4 mt-15 space-x-8'>
        <div className="h-[70vh] w-[50vh] bg-[#FFFFFF1A] border border-[#FFFFFF33] rounded-md p-3 shadow-2xl">
          <City/>
        </div>
        <div className="h-[70vh] w-[50vh] bg-[#FFFFFF1A] border border-[#FFFFFF33] rounded-md shadow-2xl">
          
        </div>
    </div>
    </>
  )
}

export default App
