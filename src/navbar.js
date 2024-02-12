import React,{useState} from "react";
import './css/navbar.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import image from "./Assets/header_logo-removebg-preview.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
AOS.init();
function Navbar(){
    const[burgermenu,setburgermenu]=useState(false)
    const open=()=>{
        console.log("working");
        setburgermenu(!burgermenu)  
    } 
    const close=()=>{
        console.log("working")
        setburgermenu(!burgermenu)
    }
    
    return <div className="nav-border " >
        
        <a href="#"><img src={image}/></a>
        <FontAwesomeIcon icon={faBars} id="hamburger" onClick={open}/>
        <nav className={`nav ${burgermenu ? 'open' : ''}`}>
            <FontAwesomeIcon icon={faX} id="close-icon" onClick={close} />
            <ul id="list_nav">
                <Link to="/">
                    Home
                </Link>
                <Link to="/about">
                    About
                </Link>
                <Link to="/">
                    Works
                </Link>
                <Link to="/">
                    Contacts
                </Link>
            </ul>
        </nav>
    </div>
}
export default Navbar