import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import ReactLogo from "../assets/react.svg";
import NodeLogo from "../assets/node.svg";
import ReactNative from "../assets/reactnative.svg";
import { motion } from "framer-motion";

const Service = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const servicesOption = [
    {
      id: 1,
      title: "Front-End Development",
      des: "Transform your creative ideas into engaging digital products. Whether it's web or mobile, we've got you covered.",
      img: ReactLogo,
    },
    {
      id: 2,
      title: "Backend-End Development",
      des: "Standard designing, building, and implementing your applications with documentation",
      img: NodeLogo,
    },
    {
      id: 3,
      title: "Application Development",
      des: "Create and maintain your websites and also take care of its performance and traffic capacity.",
      img: ReactNative,
    },
  ];

  return (
    <section
      id="service"
      className={`w-screen  dark:bg-main bg-white	 ${isDarkTheme}`}
    >
      <div className="dark:bg-main dark:text-primary w-full p-4">
        <div className="flex justify-center items-center mr-16">
          <hr class="w-4 border-2 dark:border-white border-black mr-1" />
          <h3 className="text-bold text-2xl  dark:text-gray-700">Servies</h3>
        </div>
        <h1 className="text-center text-3xl">Specialized in</h1>
      </div>

      <div className="grid place-items-center grid-cols-3	dark:bg-main ">
        {servicesOption.map((card) => (
          <motion.div
            // initial={{ x: -800 }}
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            // transition={{
            //   duration: 2,
            //   ease: "easeInOut",
            //   times: [0, 0.2, 0.5, 0.8, 1],
            // }}
            className="dark:bg-primary bg-white max-w-sm max-h-full h-[320px]  rounded-lg shadow-md hover:shadow-lg-hover transition-all duration-200 dark:shadow-2xl flex justify-center flex-col items-center"
            key={card.id}
          >
            <img
              src={card.img}
              alt="Service name"
              className="w-20 h-20 object-cover rounded-t-lg"
            />
            {/* <span className="w-54 h-40 object-cover rounded-t-lg"><FaReact /></span> */}

            <div className="px-4 py-5">
              <h3 className="text-xl font-bold text-gray-800 dark:text-textcolor text-center">
                {card.title}
              </h3>
              <p className="mt-2  text-gray-600 dark:text-textcolor text-center text-md font-serif antialiased tracking-normal font-thin">
                {card.des}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
