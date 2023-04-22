import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AskQuestion from './Chatbot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AskQuestion />
    </>
  )
}

export default App
