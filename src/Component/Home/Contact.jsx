import React, { useState } from 'react';
import './Contact.css';
import Group from '../Group';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section id="contact">
    <div className="container">
      <div className="contact row justify-content-between" >
        <div className="contact-right col-lg-5">
          <form onSubmit={handleSubmit}>
            
          <label htmlFor="email">بريدك الإلكتروني</label>
            <div className="input-container">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="بريدك الإلكتروني"
              />
            </div>
            <label htmlFor="phone">رقم الهاتف</label>
            <div className="input-container">
              <FaPhone className="input-icon" />
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="رقم الهاتف"
              />
            </div>


            <label htmlFor="address">عنوانك</label>
            <div className="input-container">
              <FaMapMarkerAlt className="input-icon" />
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="عنوانك"
              />
            </div>

            <label htmlFor="message">رسالة</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="اكتب رسالتك.."
            ></textarea>

            <button type="submit">إرسال رسالة</button>
          </form>
        </div>
        <div className="contact-left col-lg-6">
          <Group text="تواصل معنا" />
          <h1 className="about-title">تواصل معنا لتلبية جميع احتياجاتك</h1>
          <p>
            حقًا، مقاطعة قانون الصبي غير قادرة على إبعاد أختها. قدميك عن
            الأرض تشبه السادسة. بين الجنس، ترك القانون مبنيًا الآن. في
            الطاولة المبنية، احمر
          </p>
          <div className="form-text-part">
            <div className="icons">
              <i className="fas fa-clock"></i>
            </div>
            <div className="text">
              <span>ساعات العمل:</span>
              <p>9 am - 8 pm</p>
            </div>
          </div>
          <div className="form-text-part">
            <div className="icons">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="text">
              <span>العنوان الخاص بنا:</span>
              <p>6391 Elgin St. Celina, Delaware 10299</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
