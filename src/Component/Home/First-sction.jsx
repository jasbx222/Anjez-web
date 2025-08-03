import React from "react";
import heroimg from "../../assets/heroimg.png";
import Group from "../Group";
import "./Home.css";
const Hero = () => {
  return (
    <section className="sec-1 hero" id="hero">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Right Side: Text and Button */}
          <div className="col-lg-5">
            <Group text="ANJEZ LAWYER" />
            <h1 className="display-4 mb-4">
              إدارة جميع مشاريعك الخاصة بك بكل <br></br>سهولة
            </h1>
           
            <a className="btn-contact-footer">
              اتصل بنا
              <i className="fas fa-arrow-left"></i>
            </a>
          </div>
          {/* Left Side: Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={heroimg} // Replace with your image path
              alt="Hero Image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
