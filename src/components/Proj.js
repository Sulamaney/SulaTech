import React from "react";
import { motion } from "framer-motion";
import "../styles/proj.css"; 
import Mag1 from "./01.png";
import Mag2 from "./02.png";
import Mag3 from "./03.png";

const expertiseData = [
  {
    image: Mag1,
    originalTitle: "Web Development",
    hoverTitle: "View Project -----",
    description: "Digital-Inspiration",
  },
  {
    image: Mag2,
    originalTitle: "Web Development",
    hoverTitle: "View Project -----",
    description: "Flight Project.",
  },
  {
    image: Mag3,
    originalTitle: "Web Development",
    hoverTitle: "View Project -----",
    description: "Flight Project",
  },
];


const Proj = () => {
  return (
    <section className="expert">
      <div className="expert-container">
        {expertiseData.map((item, index) => (
          <div key={index} className="expert-card">
            {/* Image with zoom effect */}
            <motion.img
              src={item.image}
              alt={item.originalTitle}
              className="expert-image"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />

            <div className="expert-info">
              <h3>{item.description}</h3>
            </div>
  
            <div className="title-container">
              <h3 className="original-title">{item.originalTitle}</h3>
              <h3 className="hover-title">{item.hoverTitle}</h3>
            </div>

            
            
          </div>

        ))}
      </div>
      <br/><br/>
      <div className="expert-container">
        {expertiseData.map((item, index) => (
          <div key={index} className="expert-card">
            {/* Image with zoom effect */}
            <motion.img
              src={item.image}
              alt={item.originalTitle}
              className="expert-image"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />

            <div className="expert-info">
              <h3>{item.description}</h3>
            </div>
  
            <div className="title-container">
              <h3 className="original-title">{item.originalTitle}</h3>
              <h3 className="hover-title">{item.hoverTitle}</h3>
            </div>

            
            
          </div>

        ))}
      </div>
    </section>
  );
};

export default Proj;     