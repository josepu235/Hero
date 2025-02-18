import React from 'react';
import './AboutMe.css';
import wmsu from '../assets/wmsu.jpg';
import pic from '../assets/jojo.jpg';
function AboutMe() {
  return (
    <section id="about">
  <p className="section__text__p1">Get To Know More About Me</p>
  <div className="section-container">
    <div className="about-details-container">
      <h2>Hi, I'm Josef</h2>
      <p>
        Hi, I'm Josef, a 4th-year Bachelor of Science in Information Technology student at Western Mindanao State University. I have a passion for gaming and dabble in photography. Feel free to explore my portfolio to check out my creative works or reach out for collaboration opportunities.
      </p>
    </div>
    <div className="section__pic-container">
      <img src={pic} alt="Profile picture" className="about-pic" />
    </div>
  </div>
</section>
  );
}

export default AboutMe;