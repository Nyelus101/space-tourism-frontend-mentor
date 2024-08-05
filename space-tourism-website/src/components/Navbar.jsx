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
      <div className='flex items-center justify-between p-5'>
        <div className='flex items-center z-[10000]'>
          {/* CONTINUE THE BAR LINE ON THE NAV BAR */}
          <img src={logo} alt="Logo" className='w-10 h-10 md:w-12 md:h-12' />
          {/* <div className="bar grow hidden lg:block h-0.5  bg-white/70 translate-x-8 relative z-20"></div> */}
          <div className="grow hidden lg:block absolute w-[35%] h-[2px] right-[50%]  bg-white opacity-50 mix-blend-normal"></div>
        </div>
        
        <div onClick={handleNav} className="z-[3000] md:hidden">
          {nav ? (
            <img src={close} alt="Close" className="relative" style={{ width: '24px', height: '21px' }} />
          ) : (
            <img src={hamburger} alt="Hamburger" className="relative" style={{ width: '24px', height: '21px' }} />
          )}
        </div>
        
        <nav className={`${nav ? 'block' : 'hidden'} md:flex md:items-center md:space-x-8 md:relative md:top-0 md:right-[-1.5%] md:w-[736px] md:h-[96px] absolute top-0 right-0 md:mr-0 w-[254px] h-full text-white z-[2000] ml-[15%] bg-white backdrop-blur-lg bg-opacity-5`}>
          <ul className='pl-[32px] space-y-8 relative top-[133px] md:top-0 md:pl-0 md:left-[18%] md:space-y-0 md:flex md:space-x-8'>
            <li><Link to="/">00 HOME</Link></li>
            <li><Link to="destination">01 DESTINATION</Link></li>
            <li><Link to="crew">02 CREW</Link></li>
            <li><Link to="technology">03 TECHNOLOGY</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
















// import React, { useState } from 'react';
// import { Link, Outlet } from "react-router-dom";

// import logo from "../assets/shared/logo.svg";
// import hamburger from "../assets/shared/icon-hamburger.svg";
// import close from "../assets/shared/icon-close.svg";

// const Nav = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <>
//       <div className='flex items-center justify-between p-5 w-357 h-88'>
//         <div className='flex items-center'>
//           <img src={logo} alt="Logo" className='w-10 h-10 md:w-12 md:h-12' />
//           <div className="hidden lg:block absolute w-[35%] h-[2px] right-[50%] z-[10] bg-white opacity-50 mix-blend-normal"></div>
//         </div>
        
//         {/* <div className="bar grow hidden lg:block h-0.5  bg-white/70 translate-x-8 relative z-20"></div> */}
//           <div onClick={handleNav} className="z-[3000] md:hidden">
//             {nav ? (
//               <img src={close} alt="Close" className="relative" style={{ width: '24px', height: '21px' }} />
//             ) : (
//               <img src={hamburger} alt="Hamburger" className="relative" style={{ width: '24px', height: '21px' }} />
//             )}
//           </div>
        
//         <nav className={`${nav ? 'block' : 'hidden'} md:flex md:items-center md:space-x-8 md:relative md:top-0 md:right-[-1.5%] md:w-[736px] md:h-[96px] md:bg-transparent  absolute top-0 right-0 md:mr-0 w-[254px] h-full md:bg-white z-[2000] ml-[15%] bg-white/5 `}>
//           <ul className='pl-[32px] space-y-8 relative top-[133px] md:top-0 md:pl-0 md:left-[18%] md:space-y-0 md:flex md:space-x-8'>
//             <li><Link to="/">00 HOME</Link></li>
//             <li><Link to="destination">01 DESTINATION</Link></li>
//             <li><Link to="crew">02 CREW</Link></li>
//             <li><Link to="technology">03 TECHNOLOGY</Link></li>
//           </ul>
//         </nav>
//       </div>
//       <Outlet />
//     </>
//   );
// };

// export default Nav;