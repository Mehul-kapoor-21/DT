import React from 'react'
import logo from "../../assets/logo.png"
import profile from "../../assets/profile.png"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <div className='logo-img'>
                <img src={logo} alt='logo'></img>
            </div>

            <div className='icons'>
                <div className='circle'>
                   <i className="fa-solid fa-house-chimney"></i>
                </div>
                <div className='circle'>
                <i className="fa-solid fa-screwdriver-wrench"></i>
                </div>
                <div className='circle'>
                <i className="fa-solid fa-bell"></i>
                <div className='red-dot'></div>
                </div>
                <div className='profile-img'>
                    <img src={profile} alt='profile'></img>
                </div>
                <div className='three-dot'>
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar