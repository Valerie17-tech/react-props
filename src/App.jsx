import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './components/profile/Person'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Person fullName='Valerie Georege' bio=' I got to where I am today by being me. I was born to do exactly what I am doing today' profession='Software Engineer'/>
      <Photo />
    </div>
  )
}

export default App
