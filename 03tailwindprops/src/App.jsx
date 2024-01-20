import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "raju",
    age: 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p4 rounded-xl mb-4'>Tailwind test</h1>
      {/* <Card raju="paniaurcode" someObj={myObj}/> */}
      <Card username="raju" />
      <Card username="raju chauhan" btnText="go to this page"/>

    </>
  )
}

export default App
