import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../Images/profileIcon.png'

const Navbar = () => {
  return (
    <>
      <nav className='main-nav'>
        <div className='logo'>
            <h2>WFM</h2>
        </div>
        <div className='menu-link'>
          <ul><Link to="/home"> Home </Link> </ul>
          <ul><Link to="/"> About Us </Link> </ul>
          <ul><Link to="/"> Contact Us </Link> </ul>
          <ul>New Cars</ul>
            {/* <li>Super Cars</li>
            <li>Electric Cars</li>
            <li>SUV Cars</li>
            <li>Sedan Cars</li> */}
          <ul>Rent A Car </ul>
            {/* <li>Super Cars</li>
            <li>Electric Cars</li>
            <li>SUV Cars</li>
            <li>Sedan Cars</li> */}
          <ul>New Bikes</ul>
            {/* <li>Super Bikes</li>
            <li>Electric Bikes</li>
            <li>Scooty</li>
            <li>Electric Scooty</li> */}
          <ul>Rent A Bike</ul>
            {/* <li>Super Bikes</li>
            <li>Electric Bikes</li>
            <li>Scooty</li>
            <li>Electric Scooty</li> */}
        </div>
        <div className='profile'>
          <img src={icon} alt="No Image" width="70px" height="70px" />
        </div>
      </nav>
      
    </>
  )
}

export default Navbar
