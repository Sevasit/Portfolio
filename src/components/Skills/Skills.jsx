import React, { useEffect } from "react";
import Html from "../../assets/html.png";
import Css from "../../assets/css.png";
import Javascript from "../../assets/js.png";
import TypeScript from "../../assets/typescript.png";
import Java from "../../assets/java.png";
import Php from "../../assets/php.png";
import ReactPT from "../../assets/react.png";
import ReduxPT from "../../assets/redux.png";
import Node from "../../assets/node.png";
import Tailwind from "../../assets/Tailwind.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      data-aos="fade-in"
      data-aos-delay="200"
      className="max-w-[1500px] h-[1500px] lg:h-screen mx-auto text-center flex flex-col justify-center"
    >
      <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py8 lg:text-2xl py-2">
        <div className="shadow-lg shadow-slate-700 hover:scale-110 duration-500 text-gray-500 hover:text-red-400">
          <img
            className="max-w-[125px] lg:max-w-[250px] mx-auto"
            src={Html}
            alt=""
          />
          <p className="my-4 ">Html</p>
        </div>
        <div className="shadow-lg shadow-slate-700 hover:scale-110 duration-500 text-gray-500 hover:text-red-400">
          <img
            className="max-w-[125px] lg:max-w-[250px] mx-auto"
            src={Css}
            alt=""
          />
          <p className="my-4 ">Css</p>
        </div>
        <div className="shadow-lg shadow-slate-700 hover:scale-110 duration-500 text-gray-500 hover:text-red-400">
          <img
            className="max-w-[125px] lg:max-w-[250px] mx-auto"
            src={Javascript}
            alt=""
          />
          <p className="my-4 ">Javascript</p>
        </div>
        <div className="shadow-lg shadow-slate-700 hover:scale-110 duration-500 text-gray-500 hover:text-red-400">
          <img
            className="max-w-[125px] lg:max-w-[250px] mx-auto"
            src={TypeScript}
            alt=""
          />
          <p className="my-4 ">TypeScript</p>
        </div>
        <div className="shadow-lg shadow-slate-700 hover:scale-110 duration-500 text-gray-500 hover:text-red-400">
          <img
            className="max-w-[125px] lg:max-w-[250px] mx-auto"
            src={Java}
            alt=""
          />
          <p className="my-4 ">Basic Java</p>
        </div>
        <div className="shadow-lg shadow-slate-700 hover:scale-110 duration-500 text-gray-500 hover:text-red-400">
          <img
            className="max-w-[125px] lg:max-w-[250px] mx-auto"
            src={Php}
            alt=""
          />
          <p className="my-4 ">Basic PHP</p>
        </div>
        <div className="shadow-lg shadow-slate-700 hover:scale-110 duration-500 text-gray-500 hover:text-red-400">
          <img
            className="max-w-[125px] lg:max-w-[250px] mx-auto"
            src={ReactPT}
            alt=""
          />
          <p className="my-4 ">React JS</p>
        </div>
        <div className="shadow-lg shadow-slate-700 hover:scale-110 duration-500 text-gray-500 hover:text-red-400">
          <img
            className="max-w-[125px] lg:max-w-[250px] mx-auto"
            src={ReduxPT}
            alt=""
          />
          <p className="my-4 ">Redux</p>
        </div>
        <div className="shadow-lg shadow-slate-700 hover:scale-110 duration-500 text-gray-500 hover:text-red-400">
          <img
            className="max-w-[125px] lg:max-w-[250px] mx-auto"
            src={Node}
            alt=""
          />
          <p className="my-4 ">Basic Node JS</p>
        </div>
        <div className="shadow-lg shadow-slate-700 hover:scale-110 duration-500 text-gray-500 hover:text-red-400">
          <img
            className="max-w-[125px] lg:max-w-[250px] mx-auto"
            src={Tailwind}
            alt=""
          />
          <p className="my-4 ">Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
