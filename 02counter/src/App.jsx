import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter , setCounter] = useState(15)

  const addValue = () =>{
    setCounter(counter = counter+1)
    console.log("clicked", counter);
  }
  const removeValue = () =>{
    setCounter(counter = counter-1)
    console.log("clicked", counter);
  }

  return (
    <>
      <h1>Hello react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>Add value: {counter}</button>
      <br/>
      <button
      onClick={removeValue}>Remove value: {counter}</button>
    </>
  )
}

export default App
