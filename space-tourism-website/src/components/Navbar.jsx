
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-transparent'>
      <div className='flex items-center justify-between p-5 lg:p-8'>
        <div className='flex items-center z-[10000]'>
          <img src={logo} alt="Logo" className='w-8 h-8 md:w-10 md:h-10' />
          <div className="grow hidden lg:block absolute w-[35%] h-[2px] right-[50%] bg-white opacity-50 mix-blend-normal"></div>
        </div>
        
        <div onClick={handleNav} className="z-[3000] md:hidden">
          {nav ? (
            <img src={close} alt="Close" className="relative" style={{ width: '24px', height: '21px' }} />
          ) : (
            <img src={hamburger} alt="Hamburger" className="relative" style={{ width: '24px', height: '21px' }} />
          )}
        </div>
        
        <nav className={`fixed top-0 right-0 w-[60%] h-full bg-black bg-opacity-0 transform ${nav ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:relative bg-opacity-0 backdrop-blur-lg md:right-0 md:w-auto md:h-auto md:transform-none md:transition-none md:pl-40 md:pr-24 md:mr-[-4%] md:pt-8 md:pb-8`}>
          <ul className='flex flex-col items-left pl-8 mt-[-30%] md:pl-0 md:mt-0 justify-center h-full space-y-5 md:space-y-0 md:space-x-10 md:flex-row md:ml-auto'>
            <li><Link to="/" className="text-white text-base md:text-base" onClick={handleNav}>00 HOME</Link></li>
            <li><Link to="destination" className="text-white text-base md:text-base" onClick={handleNav}>01 DESTINATION</Link></li>
            <li><Link to="crew" className="text-white text-base md:text-base" onClick={handleNav}>02 CREW</Link></li>
            <li><Link to="technology" className="text-white text-base md:text-base" onClick={handleNav}>03 TECHNOLOGY</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;






// import React, { useState } from 'react';
// import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/shared/logo.svg";
// import hamburger from "../assets/shared/icon-hamburger.svg";
// import close from "../assets/shared/icon-close.svg";

// // NavItem Component
// // NavItem Component
// const NavItem = ({ to, label, onClick }) => {
//   const location = useLocation();
//   const isActive = location.pathname === to;

//   return (
//     <li className="relative">
//       <Link to={to} className="text-white text-base md:text-base" onClick={onClick}>
//         {label}
//       </Link>
//       {isActive && (
//         <div className="absolute w-[2px] h-full top-0 right-0 md:w-full md:h-[2px] md:bottom-0 md:left-0 bg-white"></div>
//       )}
//     </li>
//   );
// };


// const Nav = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   const navItems = [
//     { path: "/", label: "00 HOME" },
//     { path: "/destination", label: "01 DESTINATION" },
//     { path: "/crew", label: "02 CREW" },
//     { path: "/technology", label: "03 TECHNOLOGY" },
//   ];

//   return (
//     <header className='fixed top-0 left-0 w-full z-50 bg-transparent'>
//       <div className='flex items-center justify-between p-5 lg:p-8'>
//         <div className='flex items-center z-[10000]'>
//           <img src={logo} alt="Logo" className='w-8 h-8 md:w-10 md:h-10' />
//           <div className="grow hidden lg:block absolute w-[35%] h-[2px] right-[50%] bg-white opacity-50 mix-blend-normal"></div>
//         </div>
        
//         <div onClick={handleNav} className="z-[3000] md:hidden">
//           {nav ? (
//             <img src={close} alt="Close" className="relative" style={{ width: '24px', height: '21px' }} />
//           ) : (
//             <img src={hamburger} alt="Hamburger" className="relative" style={{ width: '24px', height: '21px' }} />
//           )}
//         </div>
        
//         <nav className={`fixed top-0 right-0 w-[60%] h-full bg-black bg-opacity-0 transform ${nav ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:relative bg-opacity-0 backdrop-blur-lg md:right-0 md:w-auto md:h-auto md:transform-none md:transition-none md:pl-40 md:pr-12 md:mr-[-4%] md:pt-7 md:pb-7`}>
//           <ul className='flex flex-col items-left pl-8 mt-[-30%] md:pl-0 md:mt-0 justify-center h-full space-y-5 md:space-y-0 md:space-x-10 md:flex-row md:ml-auto'>
//             {navItems.map((item) => (
//               <NavItem key={item.path} to={item.path} label={item.label} onClick={handleNav} />
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Nav;





