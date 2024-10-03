import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreatureCard from './components/CreatureCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreatureCard/>
    </>
  )
}

export default App
