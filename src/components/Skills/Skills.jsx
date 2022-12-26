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

const skills = [
  {
    id: "1",
    photo: Html,
    title: "Html",
  },
  {
    id: "2",
    photo: Css,
    title: "Css",
  },
  {
    id: "3",
    photo: Javascript,
    title: "Javascript",
  },
  {
    id: "4",
    photo: TypeScript,
    title: "TypeScript",
  },
  {
    id: "5",
    photo: Java,
    title: "Basic Java",
  },
  {
    id: "6",
    photo: Php,
    title: "Basic Php",
  },
  {
    id: "7",
    photo: ReactPT,
    title: "React",
  },
  {
    id: "8",
    photo: ReduxPT,
    title: "Redux",
  },
  {
    id: "9",
    photo: Node,
    title: "Basic Node Js",
  },
  {
    id: "10",
    photo: Tailwind,
    title: "Tailwind Css",
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      data-aos="fade-in"
      data-aos-delay="200"
      className="max-w-[1500px] h-[1500px] md:h-[800px] lg:h-screen mx-auto text-center flex flex-col justify-center"
    >
      <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py8 lg:text-2xl py-2">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="shadow-lg shadow-slate-700 hover:scale-110 duration-500 text-gray-500 hover:text-red-400"
          >
            <img
              className="max-w-[125px] lg:max-w-[250px] mx-auto"
              src={skill.photo}
              alt=""
            />
            <p className="my-4 ">{skill.title}</p>
          </div>
        ))}
        ;
      </div>
    </section>
  );
};

export default Skills;
