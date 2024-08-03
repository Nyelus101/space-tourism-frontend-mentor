import React, { useState } from 'react';
import '../index.css';

// import data from "../starter-code/data.json";
import data from "../data.json"
import moonPng from '../assets/destination/image-moon.png';
import marsPng from '../assets/destination/image-mars.png';
import europaPng from '../assets/destination/image-europa.png';
import titanPng from '../assets/destination/image-titan.png';

const imageMap = {
  'Moon': moonPng,
  'Mars': marsPng,
  'Europa': europaPng,
  'Titan': titanPng,
};

const Destination = () => {
  const [planets] = useState(data.destinations);
  const [value, setValue] = useState(0);

  // const { name, images, description, distance, travel } = planets[value];
  // console.log(images.png);

  const { name, description, distance, travel } = planets[value];
  const image = imageMap[name];

  return (
    <div className="bg-destination-sm md:bg-destination-md lg:bg-destination-lg flex flex-col justify-evenly items-center lg:flex-row lg:items-end lg:justify-between lg:p-32 h-full p-10">
        <div className="px-5 pt-32 grid grid-cols-1 lg:grid-cols-2 gap-10 xl:max-w-7xl xl:mx-auto">
          <article className="text-center md:text-left">
            <h2 className=" text-xl font-extralight text-gray-300 uppercase tracking-wider pb-10">
              01
              <span className="ml-5 font-bold">Pick your destination</span>
            </h2>

            <img
              src={image}
              alt={name}
              title={name}
              className="block mx-auto h-[150px] w-[150px] md:h-[300px] md:w-[300px] lg:h-[480px] lg:w-[480px]"
            />
          </article>

          <article className="pt-5 text-center lg:text-left pb-10">
            <ul className="flex items-center justify-center lg:justify-start mb-5">
              {planets.map((item, index) => (
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

            <h2 className="text-white font-bold text-5xl md:text-8xl lg:text-6xl uppercase tracking-widest mb-5">
              {name}
            </h2>

            <p className="text-white border-b border-gray-400 pb-5 md:w-3/4 lg:w-fit mx-auto lg:mx-0">
              {description}
            </p>

            <ul className="flex flex-col md:flex-row items-center justify-between pt-5 md:mx-36 lg:mx-0">
              <li className="uppercase text-gray-200 text-sm pb-5 md:pb-0">
                Avg. Distance<span className="text-4xl block">{distance}</span>
              </li>
              <li className="uppercase text-gray-200 text-sm lg:pl-">
                Est. travel time<span className="text-4xl block">{travel}</span>
              </li>
            </ul>
          </article>
        </div>
    </div>
  );
};

export default Destination;
