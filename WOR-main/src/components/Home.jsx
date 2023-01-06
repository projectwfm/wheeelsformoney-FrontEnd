import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.css'


const Home = () => {
  return (
    <div className='main'>
      {/* <nav class="navbar bg-primary" data-bs-theme="dark"> */}
      <nav class="navbar navbar-expand-lg bg-body-tertiary n1">
       <div class="container-fluid">
      <a class="navbar-brand" href="#">Home</a>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Login">Log In</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Signup">Sign Up</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contact Us</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success search" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
{/* </nav> */}
<div className='img'>
 
    </div>
    <footer>
    <div class="content">
      <div class="top">
        <div class="logo-details">
          <i class="fab fa-slack"></i>
          <span class="logo_name"><h1>Wheels For Money</h1></span>
        </div>
        <div class="media-icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      <div class="link-boxes">
        <ul class="box">
          <li class="link_name"><h5>Company</h5></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Get started</a></li>
        </ul>
        <ul class="box">
          <li class="link_name"><h5>Services</h5></li>
          <li><a href="#">App design</a></li>
          <li><a href="#">Web design</a></li>
          <li><a href="#">Logo design</a></li>
          <li><a href="#">Banner design</a></li>
        </ul>
        <ul class="box">
          <li class="link_name"><h5>Account</h5></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">My account</a></li>
          <li><a href="#">Prefrences</a></li>
          <li><a href="#">Purchase</a></li>
        </ul>
        <ul class="box">
          <li class="link_name"><h5>Courses</h5></li>
          <li><a href="#">HTML & CSS</a></li>
          <li><a href="#">JavaScript</a></li>
          <li><a href="#">Photography</a></li>
          <li><a href="#">Photoshop</a></li>
        </ul>
        <ul class="box input-box">
          <li class="link_name"><h5>Subscribe</h5></li>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Subscribe"/></li>
        </ul>
      </div>
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2023 <a href="#">Wheels For Money.</a>All rights reserved</span>
        <span class="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition.</a>
        </span>
      </div>
    </div>
  </footer>

    </div>
  )
}

export default Home