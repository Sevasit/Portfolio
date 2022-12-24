import React, { useEffect } from "react";
import { AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer
      data-aos="fade-in"
      data-aos-delay="100"
      className="bg-gray-1000 text-white border-t-4 border-neutral-100/30"
    >
      {/* <ItemsContainer /> */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center p-6 text-gray-400 text-sm bg-slate-800"
      >
        <div>
          <p>© {new Date().getFullYear()} Appy. All rights reserved.</p>
        </div>

        <div>
          <p>Mr. Sevasit Senpradit</p>
          <p>Phone: +66991588559</p>
          <p>Line: highteffect</p>
        </div>

        <div className="mx-auto">
          <div className="flex space-x-4">
            <a href="https://github.com/Sevasit?tab=repositories">
              <AiFillGithub
                className="cursor-pointer stroke-1 hover:stroke-2"
                size={35}
              />
            </a>
            <a href="https://www.facebook.com/new.sevasit">
              <AiFillFacebook
                className="cursor-pointer stroke-1 hover:stroke-2"
                size={35}
              />
            </a>
            <a href="https://www.instagram.com/sevasit_g.new/">
              <AiFillInstagram
                className="cursor-pointer stroke-1 hover:stroke-2"
                size={35}
              />
            </a>
          </div>
        </div>
        {/* <SocialIcons Icons={Icons} /> */}
      </div>
    </footer>
  );
};

export default Footer;
