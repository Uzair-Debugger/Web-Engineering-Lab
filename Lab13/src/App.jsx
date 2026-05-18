import { useState } from 'react'
import './App.css'
import Counter from './components/counter'
import Lorem from './components/toggle-para'

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  return (
    <main>
      <h1 className='header'>Web Engineering Lab 13</h1>
      {/* <Counter /> */}

      <button onClick={() => setToggle(!toggle)}>Toggle</button>

      {toggle && <Lorem />}
    </main>
  )
}

export default App
