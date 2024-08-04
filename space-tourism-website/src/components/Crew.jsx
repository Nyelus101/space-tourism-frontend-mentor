import React, { useState } from 'react';
// import data from "../starter-code/data.json";
import { BsCircleFill } from "react-icons/bs";
import '../index.css';

import data from "../data.json"
import anoushehPng from '../assets/crew/image-anousheh-ansari.png';
import douglasPng from '../assets/crew/image-douglas-hurley.png';
import markPng from '../assets/crew/image-mark-shuttleworth.png';
import victorPng from '../assets/crew/image-victor-glover.png';

const imageMap = {
  'Anousheh Ansari': anoushehPng,
  'Douglas Hurley': douglasPng,
  'Mark Shuttleworth': markPng,
  'Victor Glover': victorPng,
};





const Crew = () => {
  const [crew] = useState(data.crew);
  const [value, setValue] = useState(0);

  const { name, role, bio } = crew[value];
  const image = imageMap[name];

  return (
    // <div className="bg-crew-sm md:bg-crew-md lg:bg-crew-lg flex flex-col items-center justify-center h-[100vh] p-10">
    <div className="bg-crew-sm md:bg-crew-md lg:bg-crew-lg p-0 m-0 h-full">
      <div className='lg:p-32 p-10'>
        <div className='pt-[20%] md:pt-[15%] lg:pt-[5%]'>
          <h2 className="text-base text-center md:text-left font-extralight text-gray-300 uppercase tracking-wider ">
              02
              <span className="ml-5 font-bold">Meet your crew</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:max-w-7xl xl:mx-auto">
          <article className="pt-10 xl:pt-32 text-center lg:text-left">
            <h3 className="text-white font-light text-lg uppercase tracking-widest mb-2 pt-5 md:pt-2">
              {role}
            </h3>

            <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-widest mb-5">
              {name}
            </h2>

            <p className="text-white pb-5  md:w-3/4 mx-auto text-center lg:text-left lg:mx-0">{bio}</p>

            <ul className="flex items-center justify-center lg:justify-start mb-10 pt-16">
              {crew.map((item, index) => (
                <li key={index} className="mr-5">
                  <button
                    onClick={() => setValue(index)}
                    // className={`gray ${index === value && "white"}`}
                    className={`p-0 rounded-full ${index === value ? "bg-white text-white" : "text-gray-500"}`}
                  >
                    <BsCircleFill />
                  </button>
                </li>
              ))}
            </ul>
          </article>
          {/* <article className="xl:pt-32 relative">
            <img
              src={image}
              alt={name}
              title={name}
              className="block mx-auto"
            />
            <div className="absolute inset-[-10] bottom-0 h-1/4 bg-white opacity-50 filter blur-md"></div>
          </article> */}
          <article className="lg:mt-[-50%] xl:pt-32">
            <img
              src={image}
              alt={name}
              title={name}
              className="block mx-auto "
            />
          </article>
        </div>
      </div>

    </div>
  );
};

export default Crew;
