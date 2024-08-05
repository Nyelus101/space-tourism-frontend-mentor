import React, { useState } from 'react';
// import data from "../starter-code/data.json";
import '../index.css';

import data from "../data.json"
import vehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import vehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import capsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";
import capsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";


// Data
const technologies = [
  {
    name: "Launch vehicle",
    landscape: vehicleLandscape,
    portrait: vehiclePortrait,
    description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
  },
  {
    name: "Space capsule",
    landscape: capsuleLandscape,
    portrait: capsulePortrait,
    description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
  },
  {
    name: "Spaceport",
    landscape: spaceportLandscape,
    portrait: spaceportPortrait,
    description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
  },
];


const Technology = () => {
  const [actual, setActual] = useState(0);
  const technology = technologies[actual];

  return (
    <div className="bg-technology-sm md:bg-technology-md lg:bg-technology-lg lg:pl-44 p-0 m-0 h-full">
      <div className="text-center md:text-left w-fit mx-auto pt-[20%] mb-8 md:mx-2">
        <h2 className="text-sm lg:text-3xl font-extralight text-gray-300 uppercase tracking-wider pb-5 md:pb-10">
          03
          <span className="ml-5 font-bold">Space Launch 101</span>
        </h2>
      </div>
      {/* Continue from here. Check for the medium screen */}
      <div className="flex flex-col lg:flex-row-reverse">
          <div className="w-full lg:w-[35%] lg:min-h-[35vh]">
            <picture className="block">
              <source media="(min-width:1024px)" srcSet={technology.portrait.src} />
              <img
                src={technology.landscape}
                className="object-cover w-full h-auto"
                alt="Background Image"
              />
            </picture>
          </div>
          <div className="flex flex-col items-center mt-8 md:mt-14 lg:flex-row lg:grow lg:mt-0">
            <div className="w-fit flex gap-4 mb-6 md:mb-11 lg:flex-col lg:mb-0 lg:gap-8">
              {technologies.map(({ name }, index) => (
                <div
                  onClick={() => setActual(index)}
                  key={name}
                  className={`w-10 md:w-14 aspect-square flex items-center justify-center text-white border rounded-full border-white/20 transition cursor-pointer
                                    ${technology.name === name ? "border-transparent bg-white text-black" : "hover:border-white"}`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            <div className="text-secondary text-center px-6 md:max-w-lg md:mx-auto lg:text-left lg:max-w-xl pb-8">
              <span className="block text-gray-500 uppercase mb-2 text-[17px] md:text-[16px]">
                The Terminology ...
              </span>
              <h3 className="uppercase mb-4 text-white text-[24px] md:text-[40px] lg:text-[56px]">
                {technology.name}
              </h3>
              <p className="leading-relaxed lg:leading-loose text-sm lg:text-[18px] text-gray-500">
                {technology.description}
              </p>
            </div>
          </div>
        </div>
        
        
        
        
        
        
        
        {/* <div className="px-5 pt-32 grid grid-cols-1 md:grid-cols-2 gap-10 xl:max-w-7xl xl:mx-auto">
          <article>
            <img
              src={images.portrait}
              alt={name}
              title={name}
              className="block mx-auto md:hidden"
            />
          </article>

          <article className="pt-10 xl:pt-32 text-center md:text-left pb-10">
            <h3 className="text-white font-light text-2xl uppercase tracking-widest mb-5">
              The terminology...
            </h3>

            <h2 className="text-white font-bold text-4xl lg:text-5xl uppercase tracking-widest mb-5">
              {name}
            </h2>

            <p className="text-white border-b border-gray-400 pb-5">
              {description}
            </p>

            <ul className="flex flex-wrap items-center justify-between pt-5">
              {technology.map((item, index) => (
                <li key={index} className="mr-5">
                  <button
                    onClick={() => setValue(index)}
                    className={`uppercase font-semibold tracking-wider text-gray-200 pb-2 border-b border-transparent ${
                      index === value && "border-b border-white"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </article>

          <article className="pt-10 xl:pt-32 hidden md:block">
            <img
              src={images.portrait}
              alt={name}
              title={name}
              className="block mx-auto"
            />
          </article>
        </div> */}
    </div>
  );
};

export default Technology;
