import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Navbar.css'


function Navbar(){

 const navigate =  useNavigate()  
 const [mode , setMode ] = useState('light')
 
 
//  const [active , setActive] =  useState('red')
const handleMode = () =>{

  if(mode == 'light')
  {
    setMode('dark')
    localStorage.setItem('mode', 'dark')
  }
  else{
    setMode('light')
    localStorage.setItem('mode', 'light')

  }
}


return(
    <nav className={`navbar navbar-expand-lg bg-${localStorage.getItem('mode')}`}>
  <div className="container-fluid">
    <a className="navbar-brand"  style={{ color:localStorage.getItem('mode') == 'light' ? "black" :  "white"  }} onClick={()=>navigate('/')}>E-Com</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link ${window.location.href.includes('/home') ? 'active' : "" }`} aria-current="page" onClick={()=>navigate('/home')}>Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${window.location.href.includes('/about') ? 'active' : "" }`} aria-current="page" onClick={()=>navigate('/about')}>About</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${window.location.href.includes('/contact') ? 'active' : "" }`} aria-current="page" onClick={()=>navigate('/contact')}>Contact</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${window.location.href.includes('/propsd') ? 'active' : "" }`} aria-current="page" onClick={()=>navigate('/propsd')}>Drilling</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${window.location.href.includes('/form') ? 'active' : "" }`} aria-current="page" onClick={()=>navigate('/form')}>Form</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${window.location.href.includes('/rdata') ? 'active' : "" }`} aria-current="page" onClick={()=>navigate('/rdata')}>R-Data</a>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        <button type="button" className={`btn btn-${localStorage.getItem('mode') == 'light' ? 'dark' : 'light'}`} onClick={handleMode} style={{marginLeft:'10px'}} > {localStorage.getItem('mode') == 'light' ?  'Dark' :  'Light'}</button>
      </form>
    </div>
  </div>
</nav>
)



}

export default Navbar