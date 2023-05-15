import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {

// todo:
// Make current page bolded on Nav

    return (
        <>
            <nav className="Navigation_Bar">
                <Link className='Link' to='/'>
                    Home
                </Link>
                <li>
                    About
                </li>
                <li>
                    Services
                </li>
                <Link to="demo" className="Link">
                    Demo
                </Link>
                <li>
                    Contact
                </li>
            </nav>   
        </>
    );
}

export default Nav;