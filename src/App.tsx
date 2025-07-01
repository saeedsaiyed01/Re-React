
import { useState } from 'react'
import './App.css'

function App() {
    const [count,setCount]= useState(0)
    function Increase(){
      // setCount(count+1)
      // setCount(count+1)
      //prev always refer to the previous value of the state
      setCount((prev)=>prev+1)
      setCount((prev)=>prev+1)
    }

    function Descrease(){
      setCount((prev)=>prev-1)
    }

  return (
    <>
     <button onClick={Descrease}>Decrease me</button>
      
    <button onClick={Increase}>Increase me</button>
      <p>Count is {count}</p>

      

    </>
  )
}

export default App
