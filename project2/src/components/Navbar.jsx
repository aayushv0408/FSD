import React from 'react'

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', color: 'white', padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>My App</h2>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0, padding: 0 }}>
          <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
          <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
          <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
