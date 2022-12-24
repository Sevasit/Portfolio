import React, { useEffect } from "react";
import Myphoto from "../../assets/new123.png";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      data-aos="fade-in"
      data-aos-delay="200"
      className=" max-w-[1400px] mt-[-50px] w-full h-screen mx-auto text-center flex flex-col justify-center text-white"
    >
      <div className="lg:flex lg:justify-evenly">
        <div className="max-w-[1400px] bg-center">
          <img
            src={Myphoto}
            alt=""
            className="lg:h-[400px] lg:w-[400px] rounded-full shadow-2xl shadow-red-400/25 mx-auto "
          />
        </div>
        <div className="max-w-[800px] ">
          <h1 className="text-4xl font-bold text-left m-5 text-red-400 uppercase">
            About me
          </h1>
          <p className="lg:text-xl  tracking-wide leading-relaxed text-left whitespace-normal m-4">
            Hello I'm Sevasit, I'm currently a 3rd year student at Rajamangala
            University of Technology Thanyaburi. I'm looking for an internship
            to gain knowledge and self-improve. I would like to be fullstack
            developer , front end developer or backend developer. I enjoy
            discovering a new stuff and I'm always trying new things and
            learning new things.
            <br />
            <button className="transition duration-500  border-2 text-white w-[150px] rounded-md mx-auto mt-5 py-1 font-medium hover:bg-red-400 hover:text-black hover:border-black">
              <a
                href="https://www.canva.com/design/DAFVHh2RmKw/GQl15RNRbbpAFWlD1e6FDw/edit"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
