import React from 'react';
import logo from './Images/Echo_web_llc_3.png'

function Nav(props) {

// todo:
// Make current page bolded on Nav

    return (
        <>
            <nav class="flex shadow-lg">
                <img class='hover:drop-shadow-xl h-24 pl-12 relative sm:left-12 drop-shadow-lg' src={logo} alt="logo"/>
             
                {/* <div className='Navigation_Bar'> */}
                {/* <Link to='about' className='Link'>
                    About
                </Link> */}
                {/* <div class="services-menu">
                <Link to='services' className='Link'> Services </Link>
                    <ul className="services-menu-content">
                        <Link className='services-design'>Design</Link>
                        <Link className='services-development'>Development</Link>
                        <Link className='services-maintenance'>Maintenance</Link>
                    </ul>
                </div> */}
                {/* <Link to="demo" className='Link'>
                    Demo
                </Link> */}
                {/* <Link to='contact' className='Link'>
                    Contact
                </Link> */}
<a
  class="group absolute right-10 sm:right-20 rounded shadow-lg hover:shadow-2xl px-8 py-2 transition bg-white inline-flex items-center overflow-hidden border-current sm:px-8 mt-6 focus:outline-none focus:ring active:text-gray-700 mb-5"
  href="https://ixqu3aocu0m.typeform.com/to/WpcyelXK"
>
  <span class="absolute -end-full transition-all group-hover:end-4">
    <svg
      class="h-5 w-5 rtl:rotate-180 text-gray-700"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>

  <span class="text-gray-700 text-md font-bold drop-shadow-xl sm:text-lg py-1 transition-all group-hover:me-4">
    Let's Connect
  </span>
</a>
                {/* </div> */}
            </nav>   
        </>
    );
}

export default Nav;