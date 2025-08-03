import React, { useState, useEffect } from "react";
import './Style.css';  
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle scroll and set active link
  const handleScroll = () => {
    const sections = document.querySelectorAll("section"); // Select all sections
    let currentSection = "";
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    setActiveLink(currentSection); // Update the active link
  };

  useEffect(() => {
    // Add event listener on mount
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span className="logo-text">Anjez</span>
        </div>
        <nav className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a
                href="#hero"
                className={activeLink === "hero" ? "active" : ""}
              >
                الرئيسية
              </a>
            </li>
            <li>
              <a
                href="#clients"
                className={activeLink === "clients" ? "active" : ""}
              >
                العملاء
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={activeLink === "services" ? "active" : ""}
              >
              الباقات و الاشتراكات
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className={activeLink === "faq" ? "active" : ""}
              >
                الأسئلة الشائعة
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeLink === "about" ? "active" : ""}
              >
                من نحن
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeLink === "contact" ? "active" : ""}
              >
                اتصل بنا
              </a>
            </li>
            {/* <li className="auth-buttons  d-flex d-md-none flex-wrap">
              <a className="btn-login">تسجيل الدخول</a>
              <a className="btn-create-account">إنشاء حساب</a>
            </li> */}
          </ul>
        </nav>
         {/* Add buttons inside the menu */}
         {/* <li className="auth-buttons  d-none d-sm-flex">
              <a className="btn-login">تسجيل الدخول</a>
              <a className="btn-create-account">إنشاء حساب</a>
            </li> */}
        {/* Hamburger menu icon */}
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </header>
    </div>
  );
};

export default Header;
