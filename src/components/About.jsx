import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full  h-screen bg-slate-900 text-gray-300 ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-green-500">
              About
            </p>
          </div>
        </div>
        <div></div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi, I'm Piyush, nice to meet you. Please take alook around.</p>
          </div>
          <div>
          <p>
          Computer science graduate and MERN stack developer with expertise in
          AWS Solution Architecture and proficiency in C/C++ coding. Skilled in
          React, JavaScript, Node.js, Bootstrap, Material-UI and Tailwind CSS,
          and experienced in architecting and deploying scalable cloud solutions
          using AWS services like EC2, S3, RDS, and more. As of June 2023, I
          will be available for full time employment.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
