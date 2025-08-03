import React, { useEffect, useState } from "react";
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
  const [error, setError] = useState("");

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}faq`);
        const data = await response.json();
        const limitedFaqs = data.data.slice(0, 5); // limit to 5 items
        setFaqs(limitedFaqs);
        setLoading(false);
      } catch (err) {
        setError('فشل تحميل الأسئلة الشائعة');
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <section className="accordion-container" id='faq'>
      <div className="container">
        <Group text="الأسئلة الشائعة" />
        <h1>جميع استفساراتك وأسئلتك<br />تجدها هنا</h1>

        {loading && <p>جاري التحميل...</p>}
        {error && <p>{error}</p>}

        <div className="accordion">
          {!loading && !error && faqs.map((item, index) => (
            <AccordionItem
              key={item.id}
              question={item.title}
              answer={item.description}
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
