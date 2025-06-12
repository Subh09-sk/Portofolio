// import React, { useRef } from "react";
// import { FaJava, FaReact, FaGithub, FaJsSquare } from "react-icons/fa";
// import { SiSpringboot, SiTailwindcss, SiMysql, SiPostman, SiMongodb } from "react-icons/si";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md"; // Arrows icons

// const About = () => {
//   const scrollRef = useRef(null); // Ref for scrolling

//   // Scroll function
//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = 200; // Adjust scroll speed
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <section id="about" className="py-20 bg-gray-800 text-white text-center px-6">
//       {/* About Me Section */}
//       <div className="max-w-3xl mx-auto mb-12">
//         <h2 className="text-4xl font-bold mb-4">About Me</h2>
//         <p className="text-lg text-gray-300">
//           Hi, I'm <span className="text-blue-400 font-semibold">Subh</span>, a passionate **Java Full Stack Developer**.  
//           I specialize in building scalable **backend services** using **Spring Boot** and creating modern **frontends** with **React & Tailwind CSS**.  
//           I love solving real-world problems and continuously improving my skills to stay ahead in the tech world.
//         </p>
//       </div>

//       {/* Skills Section */}
//       <h2 className="text-4xl font-bold mb-6">Skills</h2>
      
//       {/* Scrollable Section with Arrows */}
//       <div className="relative flex items-center justify-center mt-6">
//         {/* Left Arrow */}
//         <button
//           onClick={() => scroll("left")}
//           className="absolute left-0 p-3 bg-gray-700 rounded-full shadow-lg hover:scale-110 transition"
//         >
//           <MdChevronLeft className="text-3xl text-white" />
//         </button>

//         {/* Scrollable Icons */}
//         <div
//           ref={scrollRef}
//           className="flex overflow-x-auto space-x-6 p-4 scrollbar-hide scroll-smooth"
//           style={{ scrollBehavior: "smooth" }}
//         >
//           <SkillCard icon={<FaJava className="text-orange-500" />} title="Java" />
//           <SkillCard icon={<SiSpringboot className="text-green-500" />} title="Spring Boot" />
//           <SkillCard icon={<FaReact className="text-blue-400" />} title="React" />
//           <SkillCard icon={<SiTailwindcss className="text-blue-300" />} title="Tailwind CSS" />
//           <SkillCard icon={<SiMysql className="text-yellow-500" />} title="MySQL" />
//           <SkillCard icon={<FaGithub className="text-white" />} title="GitHub" />
//           <SkillCard icon={<SiPostman className="text-orange-400" />} title="Postman" />
//           <SkillCard icon={<FaJsSquare className="text-yellow-300" />} title="JavaScript" />
//           <SkillCard icon={<SiMongodb className="text-green-400" />} title="MongoDB" />
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={() => scroll("right")}
//           className="absolute right-0 p-3 bg-gray-700 rounded-full shadow-lg hover:scale-110 transition"
//         >
//           <MdChevronRight className="text-3xl text-white" />
//         </button>
//       </div>
//     </section>
//   );
// };

// // Reusable Skill Card Component
// const SkillCard = ({ icon, title }) => {
//   return (
//     <div className="flex flex-col items-center bg-gray-700 p-4 rounded-xl shadow-lg min-w-[120px] hover:scale-105 transition">
//       <div className="text-5xl">{icon}</div>
//       <p className="text-lg font-semibold mt-2">{title}</p>
//     </div>
//   );
// };

// export default About;



// < , > - for removing this icon 

import React from "react";
import { FaJava, FaReact, FaGithub, FaJsSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiMysql, SiPostman, SiMongodb, SiC } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white text-center px-6">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Hi, I'm <span className="text-blue-400 font-semibold">Subh</span>, a passionate 
        <span className="text-blue-400 font-semibold"> Java Full Stack Developer</span> who loves 
        building web applications using modern technologies like 
        <span className="text-blue-400 font-semibold"> Spring Boot, React, and Tailwind CSS</span>. 
        I'm always eager to learn new things and improve my skills.
      </p>

      {/* Skills Section with Horizontal Scroll */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-6">Skills</h3>
        <div className="flex overflow-x-auto space-x-6 p-4 scrollbar-hide">
          <SkillCard icon={<FaJava className="text-orange-500" />} title="Java" />
          <SkillCard icon={<SiSpringboot className="text-green-500" />} title="Spring Boot" />
          <SkillCard icon={<FaReact className="text-blue-400" />} title="React" />
          <SkillCard icon={<SiTailwindcss className="text-blue-300" />} title="Tailwind CSS" />
          <SkillCard icon={<SiMysql className="text-yellow-500" />} title="MySQL" />
          <SkillCard icon={<FaGithub className="text-white" />} title="GitHub" />
          <SkillCard icon={<SiPostman className="text-orange-400" />} title="Postman" />
          <SkillCard icon={<FaJsSquare className="text-yellow-300" />} title="JavaScript" />
          <SkillCard icon={<SiMongodb className="text-green-400" />} title="MongoDB" />
          <SkillCard icon={<FaHtml5 className="text-red-500" />} title="HTML" />
          <SkillCard icon={<FaCss3Alt className="text-blue-500" />} title="CSS" />
          <SkillCard icon={<SiC className="text-blue-400" />} title="C" />
        </div>
      </div>
    </section>
  );
};

// Reusable Skill Card Component
const SkillCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center bg-gray-700 p-4 rounded-xl shadow-lg min-w-[120px] hover:scale-105 transition">
      <div className="text-5xl">{icon}</div>
      <p className="text-lg font-semibold mt-2">{title}</p>
    </div>
  );
};

export default About;
