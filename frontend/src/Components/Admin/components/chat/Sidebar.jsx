import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import User from './User'

const Sidebar = () => {
  return (
    <div className='sidebar'>

        <Navbar/>
        <Search/>
        <User/>
        {/* Adding some placeholder content */}
        <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
          <h3 style={{ marginBottom: '10px' }}>Placeholder Section</h3>
          <div style={{ backgroundColor: 'white', height: '50px', marginBottom: '10px' }}></div>
          <div style={{ backgroundColor: 'white', height: '50px', marginBottom: '10px' }}></div>
          <div style={{ backgroundColor: 'white', height: '50px', marginBottom: '10px' }}></div>
          <div style={{ backgroundColor: 'white', height: '50px', marginBottom: '10px' }}></div>
          <div style={{ backgroundColor: 'white', height: '50px', marginBottom: '10px' }}></div>
        </div>

    </div>
  )
}

export default Sidebar