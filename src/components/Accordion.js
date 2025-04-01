import React, { useState } from "react";
import "../styles/Accordion.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    setSelected(selected === i ? null : i);
  };

  return (
    <div className="wrapper" >
      <div className="accordion">
        <h1 className="pro">Professional Experience</h1>
        {data.map((item, i) => (
          <div key={i} className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              <p>{item.answer}</p>
              {item.links && (
                <ul>
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

const data = [
  {
    question: "📚 Courses & Learning",
    answer: "Completed courses on freeCodeCamp covering HTML, CSS, JavaScript, and React.",
  },
  {
    question: "💻 Website Clones & Projects",
    answer: "I have built and deployed multiple website clones to practice front-end development.",
    links: [
      { name: "🎟️ Ticket Master Clone", url: "https://ticket-master-five.vercel.app/" },
      { name: "🌯 Chipotle Clone", url: "https://chipotle-mu.vercel.app/" },
      { name: "📄 Buffer Clone", url: "https://buffer-hazel.vercel.app/" },
      { name: "🎨 Creative Tim Clone", url: "https://creative-tim.vercel.app/" },
      { name: "📡 MTN Clone", url: "https://mtn-azure.vercel.app/" },
      { name: "🖥️ Digital Inspiration Clone", url: "https://digital-inspiration.vercel.app/" },
      { name: "📝 Sim Form Clone", url: "https://sim-form.vercel.app/" },
    ],
  },
  {
    question: "🚀 Skills & Technologies",
    answer:
      "Proficient in React, JavaScript, CSS, Tailwind, and Framer Motion. Experienced in deploying projects with Vercel.",
  },
];

export default Accordion;
