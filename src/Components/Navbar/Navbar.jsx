import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toogle_light from '../../assets/night.png'
import toogle_dark from '../../assets/day.png'
import { Link } from 'react-router-dom';


const Navbar = () => {

  

  return (
    <div className='navbar'>

        <Link to="/">
        <img src={logo_light} alt="" className='logo'/>
        </Link>
     
        <ul>
            <Link to="/home">
                <li>Home</li>
            </Link>
            <Link to="/introduction">
                <li>Introduction</li>
            </Link>
            <Link to="/members">
                <li>Members</li>
            </Link>
            <Link to="/research">
                <li>Research</li>
            </Link>
            <Link to="/publication">
                <li>Publication</li>
            </Link>
            
            
            <li>Human-AI</li>
        </ul>

        <div className='search-box'>
            <input type="text" placeholder='Search'/>
            <img src={search_icon_light} alt=""/>
        </div>
        

    </div>
  )
}

export default Navbar