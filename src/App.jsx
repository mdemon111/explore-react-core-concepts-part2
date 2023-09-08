import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counte from './counter';
import Team from './Team';
import Users from './user';
import Friends from './friend';

function App() {
  function handleClick() {
    alert('button click');
  }

  const handleClick2 = () => {
    alert('button 2 click')
  }
  const addToFive = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Counte></Counte>
      <Team></Team>

      {/* <button onClick="handleClick">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => { alert('third clicked') }}>third</button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
