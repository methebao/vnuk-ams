import React, { useEffect } from "react";
import logo from "resources/images/logo.png";

const Landing = () => {
  return (
    <div className="landing-page">
      {" "}
      <div className="landing-page__middle">
        {" "}
        <img
          src={logo}
          className="landing-page__logo"
          alt="vnuk attendance management system"
        />{" "}
        <h1 className="landing-page__title">Attendance Management System</h1>{" "}
        <h1 className="landing-page__sub-title">
          {" "}
          Please login to use application !{" "}
        </h1>{" "}
      </div>{" "}
    </div>
  );
};

export default Landing;
