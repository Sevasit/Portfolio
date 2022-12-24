import React, { useEffect } from "react";
import Typed from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-in" data-aos-delay="200" className="text-white">
      <div className="max-w-[800px] mt-[-90px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className=" font-bold mt-1 text-4xl">Hi there !,</p>
        <h1 className="text-red-400 font-bold p-3 text-4xl">
          <Typed
            strings={["I'am Sevasit Senpradit"]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </h1>
        <div className="p-2">
          <p>
            Who wants to be fullstack developer and seeking new experiences.
          </p>
        </div>
        <button className="transition duration-500  border-2 text-white w-[150px] rounded-md mx-auto mt-5 py-1 font-medium hover:bg-red-400 hover:text-black hover:border-black">
          <a
            href="https://github.com/Sevasit?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
