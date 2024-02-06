import React, { useState, useContext } from "react";
import SliderToggle from "../component/Theme";
import { ThemeContext } from "../context/themeContext";
function Header() {
  const [selected, setSelected] = useState("light");
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`w-full h-full dark:bg-main z-10 flex justify-between items-center ${isDarkTheme} `}
    >
      <NavContent isDarkTheme={isDarkTheme} />
    </nav>
  );
}
const NavContent = ({ isDarkTheme }) => (
  <div className="dark:bg-main ">
    <h2>AMAN KUMAR</h2>
    <div>
      <a href="#home">Home</a>
      <a href="#home">Services</a>
      <a href="#home">Experience</a>
      <a href="#project">Project</a>
      <a href="#home">Skills</a>
      <a href="#home">Contact</a>
    </div>

    <div className="">
      <SliderToggle />

      <a href="mailto:aman2110113@gmail.com" className="text-primary tra">
        <button>Email</button>
      </a>
    </div>
  </div>
);

export default Header;
