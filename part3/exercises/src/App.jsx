import { useState } from 'react'
import HobbyIntroduction from './components/Introduction'
import MyProjects from './components/Projects'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My Hobby: Getting Slobby</h1>
      <HobbyIntroduction />
      <MyProjects />
    </>
  )
}

export default App
