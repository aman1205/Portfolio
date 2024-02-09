import React, { useContext } from "react";
import SliderToggle from "../component/Theme";
import { ThemeContext } from "../context/themeContext";
function Header() {
  const { isDarkTheme } = useContext(ThemeContext);
  const NavOptions = [
    {
      title: "Home",
      navgi: "#home",
    },
    {
      title: "Service",
      navgi: "#service",
    },
    {
      title: "Experience",
      navgi: "#experience",
    },
    {
      title: "Project",
      navgi: "#project",
    },
    {
      title: "Skills",
      navgi: "#skill",
    },
    {
      title: "Contact",
      navgi: "#contact",
    },
  ];
  return (
    <nav
      class={`bg-white dark:bg-main sticky w-full z-20 top-0 start-0  ${isDarkTheme}`}
    >
      <div class=" flex flex-wrap items-center justify-between mx-auto p-4 dark:bg-main ">
        <a
          href="https://flowbite.com/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Aman Kumar
          </span>
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="mr-2 sm:block">
            <SliderToggle />
          </div>

          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Resume
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
           {
            NavOptions.map((value)=>(
              <li key={value.title}>
              <a
                href={value.navgi}
                class="block py-2 px-3  rounded md:bg-transparent dark:text-primary"
                aria-current="page"
              >
                {value.title}
              </a>
            </li>
            ))
           }
        
         
           
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
