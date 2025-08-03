

import React, { useState, useEffect } from "react";
import "./Pricing.css";
import { Check, X } from "lucide-react";
import img2 from "../../assets/object.png";
import img1 from "../../assets/v.png";

const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(`${proccess.env.REACT_APP_BACKEND_URL}plan`);
        const data = await response.json();
        setPlans(data.data);
        setLoading(false);
      } catch (err) {
        setError('فشل تحميل خطط الاشتراك');
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  if (loading) return <div className="container">جاري التحميل...</div>;
  if (error) return <div className="container">{error}</div>;

  return (
    <section id='services'>
      <div className="container">
        <div className="pricing-header">
          <div className="pricing-subtitle">
            <img src={img1} alt="Group" className="ms-2" />الباقات والاشتراكات
            <img src={img2} alt="Group" className="me-2" />
          </div>
          <h1 className="pricing-title">تعرف على خطة التسعير <br></br>لدينا</h1>
        </div>

        <div className="pricing-cards">
          {plans.slice(0, 3).map((plan, index) => (
            <div key={plan.id} className={`pricing-card ${index === 1 ? 'featured' : ''}`}>
              <h2 className="card-title">{plan.title}</h2>
              <div className="card-price">{plan.monthly_price} د.ع./شهريا</div>
              <p className="card-description">{plan.description}</p>
              <div className="card-divider"></div>
              <ul className="feature-list">
                {plan.features.map((feature) => (
                  <li key={feature.id} className="feature-item">
                    <Check className="feature-icon check" />
                    <span>{feature.title}</span>
                  </li>
                ))}
              </ul>
              <div className="card-divider"></div>
              {/* <button className="subscribe-button">اشترك الآن</button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
