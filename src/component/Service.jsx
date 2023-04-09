import React from "react";
import react from "../assets/react.svg"
const Service = () => {
  return (
    <div id="service">
      <div className="section-title5">
        <b className="title3">Specialized in</b>
        <div className="above-title5">SERVICES</div>
      </div>

      <div className="services">
        <div className="service-item">
          <div className="icon3">
            <img className="react" alt="" src={react} />
          </div>
          <div className="title14">
            <h2>Front-End Development</h2>
          </div>
          <div className="description1">
            Turn what you have in mind of a digital product into reality. For
            any platform you consider.
          </div>
        </div>

        <div className="service-item">
          <div className="icon3">
            <img className="pin-icon" alt="" src="/app.svg" />
          </div>
          <div className="title15">
            <h2>Back-End  Development</h2>
          </div>
          <div className="description1">
            Standard designing, building, and implementing your applications
            with documentation.
          </div>
        </div>

        <div className="service-item">
          <div className="icon3">
            <img className="pin-icon" alt="" src="/globe.svg" />
          </div>
          <div className="title16">
            <h2>Application Development</h2>
          </div>
          <div className="description1">
            Create and maintain your websites and also take care of its
            performance and traffic capacity.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
