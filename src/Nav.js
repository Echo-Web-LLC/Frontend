import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Images/Echo_web_llc_3.png'

function Nav(props) {

// todo:
// Make current page bolded on Nav

    return (
        <>
            <nav className="Navigation_Bar_Logo">
                <Link className='Link' to='/'>
                    <img className='Logo' src={logo} alt="logo"/>
                </Link>
                <div className='Navigation_Bar'>
                <Link to='about' className='Link'>
                    About
                </Link>
                <div class="services-menu">
                <Link to='services' className='Link'> Services </Link>
                    <ul className="services-menu-content">
                        <Link className='services-design'>Design</Link>
                        <Link className='services-development'>Development</Link>
                        <Link className='services-maintenance'>Maintenance</Link>
                    </ul>
                </div>
                <Link to="demo" className='Link'>
                    Demo
                </Link>
                <Link to='contact' className='Link'>
                    Contact
                </Link>
                </div>
            </nav>   
        </>
    );
}

export default Nav;