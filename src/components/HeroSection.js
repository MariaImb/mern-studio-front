import React from 'react';
import '../App.css';
import './HeroSection.css';
import './Button.css';
import { Link } from 'react-router-dom';
import logo from '../images/img-5.png';


function HeroSection() {
    return (
        <div className='hero-container'>
            <img src={logo} alt="logo" id="logo" height="400px"/>
            <h1>RECORDING STUDIO</h1>
            <button className='btn btn--large btn--outline'><Link to='/contact' className="link-button">TURNOS ONLINE</Link></button> 
            
        </div>
    )
}

export default HeroSection
