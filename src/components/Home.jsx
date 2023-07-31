import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import { Link } from "react-scroll";

const Home = () => {
  const socialMediaLinks = [
    { icon: FaTwitter, url: "https://www.twitter.com/_piyush_patidar" },
    { icon: FaInstagram, url: "https://www.instagram.com/_piyush._.patidar/" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/patidar-piyush" },
    // Add more social media links here
  ];
  return (
    <div name="home" className="w-full h-screen bg-slate-900">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-400">Hey there...</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-green-500">
          I'm Piyush{" "}
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-500">
          A full stack developer
        </h2>
        <p className="text-gray-500 py-4 max-w-[700px]">
          Write, Code, sleep, repeat ✔
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-500 hover:border-green-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>

        <div className="flex space-x-4 my-4">
          {socialMediaLinks.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-all duration-300"
            >
              {item.icon({ size: 24 })}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
