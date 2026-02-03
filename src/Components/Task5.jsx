import React, { useState } from "react";
const accordionData = [
  {
    id: 1,
    title: "Section 1",
    content:
      "Content for the first section. Only one section stays open at a time.",
  },
  {
    id: 2,
    title: "Section 2",
    content:
      "Content for the second section. Clicking this closes the first one.",
  },
  {
    id: 3,
    title: "Section 3",
    content: "Content for the third section. This can contain any JSX or HTML.",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <div className="accordion-container">
      {accordionData.map((item) => (
        <div key={item.id} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => toggleSection(item.id)}
          >
            {item.title}
            <span className="toggle-icon">
              {activeIndex === item.id ? "−" : "+"}
            </span>
          </div>

          {activeIndex === item.id && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
