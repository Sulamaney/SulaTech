import React from "react";
import { motion } from "framer-motion";
import "../styles/work.css";

const Work = () => {
  return (
    <section className="work">
      <motion.h2 
        className="work-title"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      <h1 style={{fontSize:'80px'}}>My <br/> Work</h1>  
      </motion.h2>

      <div className="work-container">
        <div>
          <p style={{textAlign:'left'}}>
            Deployed scalable travel, event and <br/>
            telemedicine web and hybrid mobile apps <br/>
            using React SPA and PWA.
            Collaborated in 140+ projects with 50+ <br/>
            clients all around the world. I am also <br/>
            interested in data analytics and <br/>
            visualization.
          </p>
        </div>

        <div>
         er lamnwnfkr
        </div>
        
      </div>
    </section>
  );
};

export default Work;
