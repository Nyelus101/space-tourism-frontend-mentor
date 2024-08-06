// import React, { useState, useEffect } from 'react';
// import logo from "../images/logo.svg";
// import { AiOutlineShoppingCart, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import avatar from "../images/image-avatar.png";
// import Cart from './Cart';
// import { useFigure } from '../FigureContext';

// const Nav = () => {

//   const { figure } = useFigure();

//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   const [cartIsOpen, setCartIsOpen] = useState(false);

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

//   return (
//     <>
//       <div className='flex items-center justify-between p-5 border-b border-slate-400 max-w-4xl mx-auto'>
//         <div className='flex items-center justify-start gap-4'>
//             <div onClick={handleNav} className="flex items-center justify-start gap-4 z-[3000]">
//                 {nav ? <AiOutlineClose size={20} className="relative md:hidden"/> : <AiOutlineMenu size={20} className="relative md:hidden"/>}
//             </div>
//             <div className='flex items-center justify-start gap-4 md:-ml-9'>
//                 <img src={logo} alt="" className='md:pr-6'/>
//                 <nav className='z-[2050] h-full'>
//                 <ul className={`${nav ? 'block absolute left-0 top-0 w-[60%] h-full bg-white pt-24 pl-5 space-y-4' : '  hidden md:flex '}  items-center justify-start gap-4`}>
//                     <li className='md:hover:border-b-2 border-orange-400'>Collections</li>
//                     <li className='md:hover:border-b-2 border-orange-400'>Men</li>
//                     <li className='md:hover:border-b-2 border-orange-400'>Women</li>
//                     <li className='md:hover:border-b-2 border-orange-400'>About</li>
//                     <li className='md:hover:border-b-2 border-orange-400'>Contact</li>
//                 </ul>
//                 </nav>
//             </div>
//         </div>
//         <div className='md:-mr-5'>
//             <ul className='relative flex items-center justify-start gap-2 md:gap-4'>
//             {/* <div className='relative' > */}
//             <li><button onClick={() => setCartIsOpen(!cartIsOpen)}>
//                     <AiOutlineShoppingCart className="text-2xl text-slate-600" />
//                 </button></li>
//                 <li>{cartIsOpen && <Cart />}</li>
//                 {figure > 0 ? <div className='w-4 h-4 bg-orange-500 text-white rounded-full absolute -top-1 right-10 md:right-16 flex items-center justify-center text-xs'>{figure} </div> : null}

//             {/* </div> */}
//             <li>
//                 <img src={avatar} alt="" className='w-8 md:w-10 rounded-full hover:border-2 border-orange-400'/>
//             </li>
//             </ul>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Nav









// {/* <div className='flex items-center justify-between p-5 border-b border-slate-400 max-w-4xl mx-auto'>
//       <div onClick={handleNav} className='-mr-32 block md:hidden relative z-[3000]'>
//           {nav ? <AiOutlineClose size={20} className="relative"/> : <AiOutlineMenu size={20} className="relative"/>}
//       </div>
//       <div className='flex items-center justify-start gap-4'>
//         <img src={logo} alt="" className='p-0'/>
//         <nav className='z-[2050]'>
//           <ul className={`${nav ? 'block absolute left-0 top-0 w-[60%] h-full bg-white pt-24 pl-5 space-y-4' : '  hidden md:flex '}  items-center justify-start gap-4`}>
//             <li className='md:hover:border-b-2 border-orange-400'>Collections</li>
//             <li className='md:hover:border-b-2 border-orange-400'>Men</li>
//             <li className='md:hover:border-b-2 border-orange-400'>Women</li>
//             <li className='md:hover:border-b-2 border-orange-400'>About</li>
//             <li className='md:hover:border-b-2 border-orange-400'>Contact</li>
//           </ul>
//         </nav>
//       </div>
//       <div>
//         <ul className='flex items-center justify-start gap-4'>
//           <div className='relative' >
//           <li><button onClick={() => setCartIsOpen(!cartIsOpen)}>
//                 <AiOutlineShoppingCart className="text-2xl text-slate-600" />
//               </button></li>
//               <li>{cartIsOpen && <Cart />}</li>
//               {figure > 0 ? <div className='w-4 h-4 bg-orange-500 text-white rounded-full absolute -top-1 -right-2 flex items-center justify-center text-xs'>{figure} </div> : null}

//           </div>
//           <li>
//               <img src={avatar} alt="" className='w-10 rounded-full hover:border-2 border-orange-400'/>
//           </li>
//         </ul>
//       </div>
//       </div> */}



// // THIS WAS ONLY USED TO TRY OUT BLUR BACKGROUND. IT'S NOT IN USE.


// // // src/App.js
// // import React from 'react';
// // // import './App.css';

// // function App2() {
// //   return (
// //     <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1710119487743-48959c984d45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww)' }}>
// //       <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
// //         <div className="backdrop-blur-lg bg-white bg-opacity-30 p-8 rounded-md">
// //           <h1 className="text-2xl font-bold text-gray-900">Hello, World!</h1>
// //           <p className="text-gray-700 mt-4">This is a blurred div in front of a background image.</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App2;
