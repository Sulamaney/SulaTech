import { useState, useEffect } from "react";
import "../styles/info.css";

export default function FreelanceSection() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container no-scroll">
      {/* Left Section - Contact */}
      <div className="left-section">
        <h2>Available for select freelance opportunities</h2>
        <p>Have an exciting project you need help with? Send me an email or contact me via instant message!</p>
        <a href="mailto:tamal@tamalsen.dev" className="email">tamal@tamalsen.dev</a>
        <div className="contact-links">
          <p>Messenger</p>
          <p>LinkedIn</p>
          <p>Instagram</p>
          <p>GitHub</p>
        </div>
      </div>
      
      {/* Middle Section - Testimonial */}
      <div className="middle-section">
        <p>Since 2018, Tamal has been responsible for our website development, making a great impact on our company. He stays updated on the latest web tech and provides strategic insights.</p>
        <div className="profile-pic"></div>
      </div>
      
      {/* Right Section - Testimonial */}
      <div className="right-section">
        <p><strong>Tamal is AMAZING!</strong> If you have any doubt about hiring him, ask me – I am really impressed by this guy!</p>
        <p className="author">- Wilfried Hajek</p>
        <p className="role">Agile Coach | Speaker | Trainer</p>
        <div className="profile-pic right"></div>
      </div>
      
      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="back-to-top"
        >
          ↑
        </button>
      )}
    </div>
  );
}
