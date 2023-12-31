import React from "react";
import projectimg from "../assets/projectimg.png"
import workImg from "../assets/workImg.png"
import "../index.css";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-slate-900">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-green-500">Work</p>
          <p className="py-6"> Check out my recent work..</p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4">
         
          <div  style={{backgroundImage:`url(${projectimg})`}} className="shadow-lg shadow-[#99aec8] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>


          <div  style={{backgroundImage:`url(${workImg})`}} className="shadow-lg shadow-[#99aec8] group container rounded-md flex justify-center items-center mx-auto content-div">  
           {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>            
          </div>

        </div>
          
      </div>
    </div>
  );
};

export default Work;
