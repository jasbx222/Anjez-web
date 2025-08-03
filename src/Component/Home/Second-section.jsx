import React from "react";
import phoneImage from "../../assets/iphone.png";  
import "./Home.css";
import Group from "../Group";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* Right Side: Phone UI Image */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src={phoneImage} // Replace with the image of the phone UI you provided
              alt="Phone UI"
              className="img-fluid"
            />
          </div>
          {/* Left Side: Text and Info */}
          <div className="col-lg-7">
          <Group text="لماذا تختارنا؟" />
        
            <h1 className="about-title">انشاء مشاريع بكل سهولة 
            و ارياحية</h1>
           

            <div className="about-services">
              <div className="about-service-item">
                <h5><i className="fas fa-check-circle ms-4"></i> خدمات مالية</h5>
                <p>تعرض ملخص شهري وسنوي للإيرادات، المصاريف، والأرباح.
تساعد على فهم الوضع المالي بدون الحاجة لبرنامج محاسبة.</p>
              </div>
              <div className="about-service-item">
                <h5><i className="fas fa-check-circle ms-4"></i>خدمات إدارية</h5>
                <p>تعرض ملخص شهري وسنوي للإيرادات، المصاريف، والأرباح.
تساعد على فهم الوضع المالي بدون الحاجة لبرنامج محاسبة.</p>
              </div>
              <div className="about-service-item">
                <h5><i className="fas fa-check-circle ms-4"></i>إدارة المهام والمشاريع</h5>
                <p>نشئ مشروع جديد، أضف مهام، تتبع تقدمها خطوة بخطوة.
حدّد المسؤوليات، المواعيد النهائية، وأضف ملاحظات لكل مهمة.</p>
              </div>
            </div>
           
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
