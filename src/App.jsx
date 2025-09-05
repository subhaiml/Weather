import { useState } from 'react'
import './App.css'
import City from './City'
import Smc from './Smc'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center p-4 mt-15 space-x-8'>
        <div className="h-[70vh] w-[50vh] bg-[#FFFFFF1A] border border-[#FFFFFF33] rounded-md p-3 shadow-2xl">
          <City/>
        </div>
    <div className="w-[50vh] h-[70vh] bg-[#FFFFFF1A] border border-[#FFFFFF33] rounded-md shadow-2xl p-2 flex flex-col">
      
      {/* This top section stays the same */}
      <div id="fr" className="flex justify-between text-white text-sm font-sans py-4">
        <p>Home</p>
        <p>Favourites</p>
      </div>
      <hr className="border-[#FFFFFF1A]" />
      <p className="text-white py-2">⭐ Favourite Cities</p>
      
      {/* CHANGE 2: Remove h-[70%] and add "flex-1 grid-rows-2" */}
      <div id="gd" className="flex-1 grid grid-cols-2 grid-rows-2 mt-2 gap-3">
        <Smc />
        <Smc />
        <Smc />
        <Smc />
      </div>

    </div>
    </div>
    </>
  )
}

export default App
