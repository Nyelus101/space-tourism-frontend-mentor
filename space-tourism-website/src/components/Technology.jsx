import React, { useState } from 'react';
import data from "../starter-code/data.json";

const Technology = () => {
  const [technology] = useState(data.technology);
  const [value, setValue] = useState(0);

  const { name, images, description } = technology[value];

  return (
    <div className="bg-technology-sm md:bg-technology-md lg:bg-technology-lg flex flex-col items-center justify-center h-[100vh] p-10">
      <section className="home technology">
        <div className="px-5 pt-32 grid grid-cols-1 md:grid-cols-2 gap-10 xl:max-w-7xl xl:mx-auto">
          <article className="text-center md:text-left">
            <h2 className="text-3xl font-extralight text-gray-300 uppercase tracking-wider pb-5 md:pb-10">
              03
              <span className="ml-5 font-bold">Space Launch 101</span>
            </h2>

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
        </div>
      </section>
    </div>
  );
};

export default Technology;
