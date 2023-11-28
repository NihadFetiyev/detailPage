import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navLinks">
      <Link to="/"><button>Home</button></Link>
      <Link to="/contact"><button>contact</button></Link>
    </div>
  )
}

export default Navbar