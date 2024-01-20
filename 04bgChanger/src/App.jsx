import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  // function changeColor(color){
  //   setCount(color)
  // }


  return (
    <div className="w-full h-screen duration-200 " style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-centre gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button
        onClick={() =>setColor('red')}
        className='outline-non px-4 py-1 rounded-full shadow-lg text-black' 
        style={{backgroundColor: 'red'}}>Red</button>
        <button
        onClick={() =>setColor('Pink')}
        className='outline-non px-4 py-1 rounded-full shadow-lg text-black'
        style={{backgroundColor: 'Pink'}}>Pink</button>
        <button
        onClick={() =>setColor('Green')}
        className='outline-non px-4 py-1 rounded-full shadow-lg text-black'
        style={{backgroundColor: 'Green'}}>Green</button>
        <button
        onClick={() =>setColor('Orange')}
        className='outline-non px-4 py-1 rounded-full shadow-lg text-black'
        style={{backgroundColor: 'Orange'}}>Orange</button>
        <button
        onClick={() =>setColor('Grey')}
        className='outline-non px-4 py-1 rounded-full shadow-lg text-black'
        style={{backgroundColor: 'Grey'}}>Grey</button>
        <button
        onClick={() =>setColor('Yellow')}
        className='outline-non px-4 py-1 rounded-full shadow-lg text-black'
        style={{backgroundColor: 'Yellow'}}>Yellow</button>
        <button
        onClick={() =>setColor('Brown')}
        className='outline-non px-4 py-1 rounded-full shadow-lg text-black'
        style={{backgroundColor: 'Brown'}}>Brown</button>
        <button
        onClick={() =>setColor('Black')}
        className='outline-non px-4 py-1 rounded-full shadow-lg text-black'
        style={{backgroundColor: 'Black'}}>Black</button>
      </div>
      </div>

    </div>
  )
}

export default App
