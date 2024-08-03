import React from 'react';
import '../index.css';

const Home = () => {
  return (
    <div className="bg-home-sm md:bg-home-md lg:bg-home-lg flex flex-col justify-evenly items-center lg:flex-row lg:items-end lg:justify-between lg:p-32 h-full p-10">
      <div className='lg:w-[1110px] lg:h-[343px] flex flex-col justify-evenly items-center lg:flex-row lg:items-end lg:justify-between md:pt-[128px] md:px-[3%] '>
      <article className="text-center lg:text-left ">
        <h1 className="text-gray-400 text-xl uppercase ">
          So, you want to travel to{" "}
          <span className="block font-semibold tracking-widest text-4xl text-white md:text-5xl lg:text-9xl 2xl:text-7xl mb-10 mt-3 ">
            SPACE
          </span>
        </h1>
        <p className="text-gray-400 md:w-3/4 lg:w-3/4 mx-auto lg:mx-0">
          Let's face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of
          it. Well, sit back, and relax because we'll give you a truly out
          of this world experience!
        </p>
      </article>
      <article className="flex items-center justify-center pt-[5%] lg:pt-0">
        <div className="relative group">
          <div className="absolute top-0 left-0 w-full h-full bg-white/10 rounded-full scale-50 transition-transform duration-700 ease-in-out group-hover:scale-100"></div>
          <button className="relative z-10 w-40 h-40 md:w-52 md:h-52 lg:w-[272px] lg:h-[272px] bg-white text-gray-900 font-bold uppercase text-xl md:text-2xl lg:text-3xl rounded-full shadow-lg flex items-center justify-center">
            Explore
          </button>
        </div>
      </article>
      </div>
      
    </div>
  );
};

export default Home;










// import React from 'react';
// import '../index.css';

// const Home = () => {
//   return (
//     <div className="bg-home-sm md:bg-home-md lg:bg-home-lg flex flex-col items-center justify-center h-[100vh] p-10">
//       <article className="text-center md:text-left">
//         <h1 className="text-gray-400 text-xl uppercase">
//           So, you want to travel to{" "}
//           <span className="block font-semibold tracking-widest text-4xl text-white md:text-5xl lg:text-6xl 2xl:text-7xl mb-10 mt-3">
//             space
//           </span>
//         </h1>
//         <p className="text-gray-400 md:w-11/12 lg:w-1/2">
//           Let's face it; if you want to go to space, you might as well
//           genuinely go to outer space and not hover kind of on the edge of
//           it. Well, sit back, and relax because we'll give you a truly out
//           of this world experience!
//         </p>
//       </article>
//       <article>
//         <button className="bg-white text-gray-900 font-bold uppercase text-2xl w-40 h-40 rounded-full shadow xl:h-52 xl:w-52 xl:text-4xl animate-pulse mt-10 md:mt-0">
//           Explore
//         </button>
//       </article>
//     </div>
//   );
// };

// export default Home;
