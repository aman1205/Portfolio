import React from "react";
import ReactLogo from "../assets/react.svg"
import NodeLogo from "../assets/node.svg"
const Service = () => {

  const servicesOption= [

    {
      id:1,
      title:"Front-End Development",
      des:"Turn what you have in mind of a digital product into reality. For any platform you consider",
      img:ReactLogo

    },
    {
      id:2,
      title:"Backend-End Development",
      des:"Standard designing, building, and implementing your applications with documentation",
      img:NodeLogo

    },
    {
      id:3,
      title:"Application Development",
      des:"Create and maintain your websites and also take care of its performance and traffic capacity.",
      img:ReactLogo

    }
  ]

  console.log(servicesOption)

  return (
    <div id="service">
      <div className="section-title">
        <b className="specialized">Specialized in</b>
        <div className="above-title">SERVICES</div>

      </div>
    </div>
  );
};

export default Service;
