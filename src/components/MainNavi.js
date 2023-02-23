import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"

 const MainNavi = () => {
  return (
    <header>
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">products</Link></li>
        </ul>
        </nav>
    
    </header>
  )
}

export default MainNavi