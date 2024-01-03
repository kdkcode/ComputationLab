import React, { useState } from 'react';
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toogle_light from '../../assets/night.png'
import toogle_dark from '../../assets/day.png'
import { Link } from 'react-router-dom';



const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
      const bodyContent = document.querySelector('.body-content'); // 본문 내용의 클래스명이 'body-content'라고 가정
  if (!mobileMenuOpen) {
    // 메뉴의 높이에 맞추어 조정 필요
    bodyContent.style.marginTop = '300px'; // 예시 값, 메뉴 높이에 맞게 조정 필요
  } else {
    bodyContent.style.marginTop = '0px';
  }
    };

  

  return (
    <div className='navbar'>

        <Link to="/">
            <img src={logo_light} alt="" className='logo'/>
        </Link>

        {/* 햄버거 메뉴 아이콘 */}
      <div className='hamburger-menu' onClick={toggleMobileMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
     
      <ul className={mobileMenuOpen ? 'nav-links-mobile' : 'nav-links'}>
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
        <div>

        </div>

        <div className='search-box'>
            
        </div>
        

    </div>
  )
}

export default Navbar