import { useState } from 'react'
import Logo from '/resumelogo.svg'
import './App.css'
import { motion } from "motion/react"

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <motion.img
        src={Logo}
        alt="Kamile's Resume Logo"
        className="logo"
        drag
        whileDrag={{ scale: 1.05, cursor: "grabbing" }}
        style={{ width: 240, borderRadius: 12, userSelect: "none", touchAction: "none" }}
        draggable={false} // prevent the browser's native image drag ghost
        dragConstraints={{
          top: -100,
          left: -100,
          right: 100,
          bottom: 100,
        }}
        dragElastic={0.2}
      />
      <h1>Kamile's Resume</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
