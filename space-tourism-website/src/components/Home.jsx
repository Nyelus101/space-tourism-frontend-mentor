import React from 'react';
import '../index.css';

const Home = () => {
  return (
    <div className="bg-home-sm md:bg-home-md lg:bg-home-lg flex flex-col justify-evenly items-center lg:flex-row lg:items-end lg:justify-between lg:p-32 h-full p-10">
      <div className='lg:w-[1110px] lg:h-[343px] flex flex-col justify-evenly items-center lg:flex-row lg:items-end lg:justify-between md:pt-[128px] md:px-[3%] '>
      <article className="text-center lg:text-left ">
        <h1 className="text-gray-400 text-sm md:text-xl uppercase ">
          So, you want to travel to{" "}
          <span className="block font-semibold tracking-widest text-7xl text-white md:text-8xl lg:text-9xl 2xl:text-7xl mb-10 mt-3 ">
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
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-white/10 rounded-full scale-50 transition-transform duration-[700ms!important] ease-in-out group-hover:scale-100"></div>
          <button className="relative z-10 w-40 h-40 md:w-52 md:h-52 lg:w-72 lg:h-72 bg-white text-gray-900 font-bold uppercase text-lg md:text-2xl lg:text-3xl rounded-full shadow-lg flex items-center justify-center cursor-pointer">
            Explore
          </button>
        </div>
      </article>

      </div>
      
    </div>
  );
};

export default Home;

{/* <article className="flex items-center justify-center pt-[5%] lg:pt-0">
        <div className="relative group">
          <div className="absolute top-0 left-0 w-full h-full bg-white/10 rounded-full scale-50 transition-transform duration-700 ease-in-out group-hover:scale-100"></div>
          <button className="relative z-10 w-40 h-40 md:w-52 md:h-52 lg:w-[272px] lg:h-[272px] bg-white text-gray-900 font-bold uppercase text-xl md:text-2xl lg:text-3xl rounded-full shadow-lg flex items-center justify-center">
            Explore
          </button>
        </div>
      </article> */}