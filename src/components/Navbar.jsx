import React from 'react'
import  "./NavBar.css"
import { Link } from 'react-router-dom'
export default function Navbar({setSearch}) {
  return (
    <div className= "Nav">
        
        <h2>Shop.io</h2>
        <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>

            <li>
              <Link to={"/service"}>Service</Link>
            </li>
            
            <li>
              <Link to = {"/products"}>Product</Link>
            </li>

            <li>
              <Link to={"/About"}>About</Link>
            </li>
        </ul>

    </div>
  )
}
