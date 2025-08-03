

// export default ClientsSection;
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/pagination"; 
import "swiper/css/navigation"; 

import img2 from "../../assets/object.png";
import img1 from "../../assets/v.png";
import img from "../../assets/Ellipse.png";

const ClientsSection = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch(`${proccess.env.REACT_APP_BACKEND_URL}client`);
        const data = await response.json();
        setClients(data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch clients');
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (loading) {
    return (
      <section className="clients-section">
        <div className="container">
          <div className="swiper-container">
            <div className="client-card">
              <div className="client-content">
                <h4>Loading clients...</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="clients-section">
        <div className="container">
          <div className="swiper-container">
            <div className="client-card">
              <div className="client-content">
                <h4>Error: {error}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="clients-section">
      <div className="container">
        <div className="pricing-subtitle">
          <img src={img1} alt="Group" className="ms-2" />
          عملائنا
          <img src={img2} alt="Group" className="me-2" />
        </div>
        <h1 className="about-title">
          لقد عملنا مع بعض العملاء
          <br />
          المتميزون
        </h1>

        <div className="swiper-container">
          <Swiper
            spaceBetween={30} 
            slidesPerView={1} 
            loop={true} 
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              1200: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              300: {
                slidesPerView: 1,
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {clients.map((client, index) => (
              <SwiperSlide key={client.id}>
                <div className="client-card">
                  <div className="client-avatar">
                    <img src={client.profile_image_url || img} alt={client.name || 'Client'} />
                  </div>
                  <div className="client-content">
                    <span className="client-id">{String(index + 1).padStart(2, '0')}</span>
                    <h4 className="client-name">{client.name || 'Unknown Client'}</h4>
                    <ul className="client-features">
                      {[
                        client.description || 'No description available',
                        'الأخطاء التي يجب تجنبها',
                        'شركات ناشئة',
                        'تعرّف على الخطوط'
                      ].map((feat, i) => (
                        <li key={i}>
                          {/* Conditionally render the checkmark for the features except the long one */}
                          {feat !== 'حينما متقاطعة قانون الصب غير قادرة على إبعاد أقدامها قديمًا عن الأرض شبيه الساسة بين الجنس، ترك القانون ميتًا' && (
                            <span className="checkmark">✔</span>
                          )}
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
