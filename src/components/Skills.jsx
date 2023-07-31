import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import Cpp from "../assets/C++.png"
import C from "../assets/C.png"

const Skills = () => {
  return (
    <div name="skills" className="bg-slate-900  text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-green-500">
            Experience
          </p>
          <p className="py-4">These are some of my tech stack as of 2023</p>
        </div>

        <div className="w-full flex justify-center space-x-5 flex-wrap  gap-4 text-center py-8">
          <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div> 
          <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4">Node</p>
          </div>
          <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={FireBase} alt="HTML icon" />
            <p className="my-4">FireBase</p>
          </div>
          <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">Tailwind</p>
          </div>         
          <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4">Mongo</p>
          </div>
          <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Cpp} alt="HTML icon" />
            <p className="my-4">C++</p>
          </div>
          <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={C} alt="HTML icon" />
            <p className="my-4">C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
