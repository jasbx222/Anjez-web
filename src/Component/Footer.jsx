import React, { useState, useEffect } from "react";
import './Style.css';  
import logo from '../assets/logo.png';

const Footer = () => {
  const [socialLinks, setSocialLinks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await fetch(`${proccess.env.REACT_APP_BACKEND_URL}system-parameter`);
        const data = await response.json();
        setSocialLinks(data);
        setLoading(false);
      } catch (err) {
        setError('فشل تحميل روابط التواصل الاجتماعي');
        setLoading(false);
      }
    };

    fetchSocialLinks();
  }, []);

  if (loading) return <div className="container">جاري التحميل...</div>;
  if (error) return <div className="container">{error}</div>;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="top-nav">
            <div className="logo">
              <img src={logo} alt="logo" />
              <span className="logo-text">Anjez</span>
            </div>
            <div className="contact-us">
              <a href={socialLinks?.whatsApp} className="btn-contact-footer">
                اتصل بنا
                <i className="fas fa-arrow-left"></i>
              </a>
            </div>
          </div>

          {/* Footer Links Sections */}
          <div className="footer-links">
            <div className="pages">
              <h3>الصفحات</h3>
              <ul>
                <li><a href="#hero"><i className="fas fa-angle-left"></i> الرئيسية</a></li>
                <li><a href="#about"><i className="fas fa-angle-left"></i> عن الموقع</a></li>
                <li><a href="#faq"><i className="fas fa-angle-left"></i> الأسئلة الشائعة</a></li>
                <li><a href="#about-us"><i className="fas fa-angle-left"></i> من نحن</a></li>
              </ul>
            </div>

            <div className="services">
              <h3>قائمة الخدمة</h3>
              <ul>
                <li><a><i className="fas fa-check"></i> إدارة المشاريع الخاصة بك</a></li>
                <li><a><i className="fas fa-check"></i> إدارة المالية الخاصة بك</a></li>
                <li><a><i className="fas fa-check"></i> إدارة العملاء الخاصين بك</a></li>
                <li><a><i className="fas fa-check"></i> إدارة الموظفين الخاصين بك</a></li>
              </ul>
            </div>

            {/* Social Media Icons */}
            <div className="social-media">
              <div className="social-icons">
                {socialLinks?.facebook && (
                  <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                  </a>
                )}
                {socialLinks?.x && (
                  <a href={socialLinks.x} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                )}
                {socialLinks?.linkedIn && (
                  <a href={socialLinks.linkedIn} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                )}
                {socialLinks?.pinterest && (
                  <a href={socialLinks.pinterest} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-pinterest"></i>
                  </a>
                )}
                {socialLinks?.instagram && (
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© Anjez {new Date().getFullYear()} | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
