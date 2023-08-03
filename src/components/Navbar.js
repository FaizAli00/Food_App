import React, { useState } from 'react'
import logo from '../assets/flenz.webp'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import { Link } from 'react-router-dom'

function Navbar() {
  const[openMenu, setOpenMenu] = useState(false)

  const toggleNavbar = () => {
    setOpenMenu(!openMenu);
  }
  return (
    <div className='navbar'>
      <div className='leftSideNav' id={openMenu ? "open" : "close"}>
        <img src={logo} />
        <div className='hiddenLinks'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      </div>
      
      <div className='rightSideNav'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <button onClick={toggleNavbar}>
        <ReorderIcon  />
        </button>
      </div>
    </div>
  )
}

export default Navbar
