import React, { useContext } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";
import profile from "../assets/profile.jpg";
import { ThemeContext } from "../context/themeContext";

const Home = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    a: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <section className={` w-full h-screen	 flex ${isDarkTheme}`}>
      <div className="dark:bg-main w-1/2 h-full p-2 grid place-content-center">
        <div className="text-black dark:bg-main">

          <motion.h1 {...animation.h1} className="dark:text-white p-4 text-base font-robotoFont font-bold ">
            Hi , I Am <br /> AMAN KUMAR
          </motion.h1>
          <div  className="w-10/12 p-4 text-lg font-extrabold	font-mono	"> 
          <Typewriter
            options={{
              strings:
                "Third <sup>3rd</sup> in BTech. CSE from AKGEC. I am a full stack web developer willing to get involved in software writings and user-friendly website development I am a passionate learner interested in developing backends of websites",
              autoStart: true,
              loop: true,
              wrapperClassName: "dark:text-white text-black tracking-[0.2em]  p-2 ",
              cursorClassName: "text-black",
            }}
          />         
          </div>  
        </div>
        <motion.div className="flex gap-12 ml-20 sticky">
             <motion.a
             {...animation.a}
              href="#_"
              class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"
            >
              Hire Me
            </motion.a>
             <motion.a
             {...animation.a}
              href="#_"
              class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"
            >
              Projects
            </motion.a>
        </motion.div>

      </div>
      <div className=" dark:bg-main w-1/2 h-full grid place-items-center">
            <div className="bg-blue-800 w-96 h-96 transition-transform -rotate-6 rounded-md relative ">
            </div>
                <img className="w-96 h-96 absolute rounded-lg " src={profile} alt="" />

      </div>
    </section>
  );
};

export default Home;
