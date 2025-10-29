import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  return (
    <div>
      <Navbar />
      <Card title="Aayush" description="This is the first card."/>
      <Card title="Abdullah" description="This is the second card."/>
    </div>
  )
}

export default App
