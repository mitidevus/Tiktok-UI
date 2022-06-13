import { useState } from 'react'
import Content from './Content'

function App() {
  return (
    <div style={{ padding: 20 }}>
      <button>Toggle theme</button>
      <Content />
    </div>
  )
}

export default App