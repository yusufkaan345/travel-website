import React ,{useState}from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import {Link} from 'react-scroll'
import {FaFacebook,FaTwitter,FaInstagram,FaPinterest,FaYoutube} from 'react-icons/fa'
import "./Navbar.css";

function Navbar() {
  const[nav,setNav]=useState(false)
  const handleClick=()=>{
    
    setNav(!nav)
  }
  return (
    <div name="home" className={nav ? 'navbar navbar-bg' : 'navbar'}>
      <div className={nav ? 'logo dark' : 'logo'}>
        <h2>BEACHES.</h2>
      </div>
      <ul className="nav-menu">
      <Link to="home" smooth={true} duration={500}> <li>Home</li></Link>
      <Link to="destinations" smooth={true} duration={500}>  <li>Destinations</li></Link>
      <Link to="travel" smooth={true} duration={500}> <li>Travel</li></Link>
      <Link to="book" smooth={true} duration={500}> <li>Book</li></Link>
      <Link to="views" smooth={true} duration={500}>   <li>Views</li></Link> 
       
        
        
      
      </ul>
      <div className="nav-buttons">
        <div className="nav-icons">
          <BiSearch className="icon" style={{ marginRight:"1rem"}} />
          <BsPerson className="icon" style={{ marginRight:"1rem"}}/>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {!nav ?(<AiOutlineMenu /> ): (<AiOutlineClose className="dark"/>)}
          
        </div>

        <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
          <ul className="mobil-nav">
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>Book</li>
            <li>Views</li>
          </ul>
          <div className="mobile-menu-bottom">
            <div className="menu-buttons">
              <button>Search</button>
              <button>Account</button>
            </div>
            <div className=" social-icons">
                <FaFacebook className="icon"/>
                <FaInstagram className="icon"/>
                <FaTwitter className="icon"/>
                <FaPinterest className="icon"/>
                <FaYoutube className="icon"/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
