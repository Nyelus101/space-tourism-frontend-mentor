import React, { useState, useEffect } from 'react';

import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

//   useEffect(() => {
//     const handleResize = () => {
//       // Set nav to false when the screen size is above a certain breakpoint
//       if (window.innerWidth >= 768) {
//         setNav(false);
//       }
//     };

//     // Listen for window resize events
//     window.addEventListener('resize', handleResize);

//     // Remove the event listener when component unmounts
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

  return (
    <>
      <div className='flex items-center justify-between p-5 border-b border-slate-400 max-w-4xl mx-auto'>
      <div className='flex items-center'>
        <img src={logo} alt="Logo" className='md:pr-6' />
      </div>
      <div className='flex items-center'>
        <div onClick={handleNav} className="z-[3000] md:hidden">
          {nav ? (
            <img src={close} alt="Close" className="relative" style={{ width: '20px', height: '20px' }} />
          ) : (
            <img src={hamburger} alt="Hamburger" className="relative" style={{ width: '20px', height: '20px' }} />
          )}
        </div>
      </div>
      <nav className='z-[2050] h-full'>
        <ul className={`${nav ? 'block absolute right-0 top-0 w-[60%] h-full bg-white pt-24 pl-5 space-y-4' : 'hidden md:flex'} items-center gap-4`}>
          <li>00 HOME</li>
          <li>01 DESTINATION</li>
          <li>02 CREW</li>
          <li>03 TECHNOLOGY</li>
        </ul>
      </nav>
    </div>
  </>
  )
}

export default Nav