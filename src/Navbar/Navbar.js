import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Navbar.css'


function Navbar(){

 const navigate =  useNavigate()  
 
 
//  const [active , setActive] =  useState('red')



return(
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" onClick={()=>navigate('/')}>E-Com</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class={`nav-link ${window.location.href.includes('/home') ? 'active' : "" }`} aria-current="page" onClick={()=>navigate('/home')}>Home</a>
        </li>
        <li class="nav-item">
          <a class={`nav-link ${window.location.href.includes('/about') ? 'active' : "" }`} aria-current="page" onClick={()=>navigate('/about')}>About</a>
        </li>
        <li class="nav-item">
          <a class={`nav-link ${window.location.href.includes('/contact') ? 'active' : "" }`} aria-current="page" onClick={()=>navigate('/contact')}>Contact</a>
        </li>
       
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
)



}

export default Navbar