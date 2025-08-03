import React, { useState, useEffect } from "react";
import "./Home.css";
import Group from "../Group";

const AccordionItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="accordion-item">
    <div className="accordion-header" onClick={onToggle}>
      <span className={`accordion-arrow ${isOpen ? "open" : ""}`} />
      <h5>{question}</h5>
    </div>
    <div className={`accordion-body ${isOpen ? "open" : ""}`}>
      <p>{answer}</p>
    </div>
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch(`${proccess.env.REACT_APP_BACKEND_URL}faq`);
        const data = await response.json();
        // Limit to 5 items as requested
        const limitedFaqs = data.data.slice(0, 5);
        setFaqs(limitedFaqs);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch FAQs');
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (error) {
    return <div className="container">Error: {error}</div>;
  }

  return (
    <section className="accordion-container" id='faq'>
      <div className="container">
        <Group text="الأسئلة الشائعة" />
        <h1>جميع استفساراتك و أسالتك<br></br> تجدها هنا</h1>
        <div className="accordion">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              question={faq.title}
              answer={faq.description}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
