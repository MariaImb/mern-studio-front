import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/img-5.png';
import './Navbar.css';

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src={logo} alt="logo" id="logo" height="90px"/>
                    </Link>

                    <div className="menu-icon" onClick={handleClick}>
                        <i className= {click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu' }>
                        <li className='nav-item'>
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>INICIO</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/estudio' className="nav-links" onClick={closeMobileMenu}>ESTUDIO</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/clientes' className="nav-links" onClick={closeMobileMenu}>CLIENTES</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contacto' className="nav-links" onClick={closeMobileMenu}>CONTACTO</Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to='/sign-up' className="nav-links-mobile" onClick={closeMobileMenu}>Iniciar Sesion</Link>
                        </li> */}

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
