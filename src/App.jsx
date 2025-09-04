import { useState } from 'react'
import './App.css'
import City from './City'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center p-4 mt-15 space-x-8'>
      
    <City/>
    <City/>
    </div>
    </>
  )
}

export default App
