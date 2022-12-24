import React, { useEffect } from "react";
import fifa from "../../assets/fifa.png";
import islandTH from "../../assets/islandTH.png";
import chatRealTime from "../../assets/chatRealTime.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      data-aos="fade-in fghf"
      data-aos-delay="200"
      className="flex items-center justify-center min-h-screen container mx-auto text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden flex justify-center items-center">
              <img
                src={islandTH}
                alt=""
                className="h-[500px] w-[250px] md:h-[783px] md:w-full"
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-medium mt-3 text-center">
              The IslandTH Website
            </h3>
            <p className="text-slate-500 text-lg mt-1 text-center pt-3">
              2021 Created the IslandTH website for promoting tourism in
              Thailand by using HTML, CSS, JS
            </p>
            <button className="transition duration-500  border-2 text-white w-[150px] rounded-md mx-auto mt-5 py-1 font-medium hover:bg-red-400 hover:text-black hover:border-black">
              <a
                href="https://github.com/Sevasit?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                Explore
              </a>
            </button>
          </div>
        </div>

        <div className="card">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden flex justify-center items-center pt-1">
              <img
                src={chatRealTime}
                alt=""
                className="h-[500px] w-[250px] md:h-full md:w-full"
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-medium mt-3 text-center">
              The Real Time Chat
            </h3>
            <p className="text-slate-500 text-lg mt-1 text-center pt-3">
              2022 Created the Real time chat for practicing my skill and
              learning PHP (Personal Project) by using PHP, CSS, JS, Ajax
            </p>
            <button className="transition duration-500  border-2 text-white w-[150px] rounded-md mx-auto mt-5 py-1 font-medium hover:bg-red-400 hover:text-black hover:border-black">
              <a
                href="https://github.com/Sevasit?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                Explore
              </a>
            </button>
          </div>
        </div>

        <div className="card">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden flex justify-center items-center">
              <img
                src={fifa}
                alt=""
                className="h-[500px] w-[250px] md:h-[783px] md:w-full"
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-medium mt-3 text-center">
              The Fifakub Application
            </h3>
            <p className="text-slate-500 text-lg mt-1 text-center pt-3">
              2022 Created the Fifakub mobile application for promoting fifa
              world cup 2022 by using JAVA, database (firebase)
            </p>
            <button className="transition duration-500  border-2 text-white w-[150px] rounded-md mx-auto mt-5 py-1 font-medium hover:bg-red-400 hover:text-black hover:border-black">
              <a
                href="https://github.com/Sevasit?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                Explore
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
