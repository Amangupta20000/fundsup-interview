import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './images/logo.png'
import Signup from './Signup';

function Navbar() {
    return (
        <>
        <div className="container-fluid  nav_bg">
            <div className="row row1">
             <div className=" mx-auto">
            
                


        <nav className="navbar navbar-expand-lg fixedFooter navbar-light  ">
        <div className="container-fluid ">
          <NavLink exact className="navbar-brand " to='/'><img src={logo} className="logo" alt="" /></NavLink>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" 
                    aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to='/investors'>INVESTORS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" exact className="nav-link" to='/founders'>FOUNDERS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" exact className="nav-link" to='/patners'>PATNERS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" exact className="nav-link" to='/about'>ABOUT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" exact className="nav-link" to='/news'>NEWS</NavLink>
              </li>
              <div className="vl"><h1> </h1></div>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" exact className="nav-link" to='/login'>LOGIN</NavLink>
              </li>
              
              <li className="nav-item a">
              <span className="new">
               <NavLink type="button" className=" button" to="/signup" >SIGN UP</NavLink> 
               </span>
               </li>
            
            </ul>
          </div>
        </div>
      </nav>
      </div>
      </div>
  </div>
        
        </>
    )
}

export default Navbar
