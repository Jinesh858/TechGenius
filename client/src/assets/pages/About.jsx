import React, { useState , useEffect } from 'react';
import './About.css';
import {useAuth} from "../store/Auth";

export const About = () => {
  
  const { user } = useAuth(); 

  useEffect(() => {
    const leaders = document.querySelectorAll('.leader');

    function fadeInLeaders() {
      leaders.forEach(leader => {
        const rect = leader.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top < windowHeight * 0.9) {
          leader.classList.add('fadeIn');
        }
      });
    }

    window.addEventListener('scroll', fadeInLeaders);

    return () => {
      window.removeEventListener('scroll', fadeInLeaders);
    };
  }, []);

  return (
    <div className="about-container">
      <h1>Let me Introduce {user.username} about TechGenius Inc.</h1>
      <section className="company-story">
        <h2>Our Story</h2>
        <p>Founded in 2000, TechGenius Inc. started as a passion project in a small garage, where a group of like-minded individuals shared a common vision: to harness the power of technology to solve real-world problems.</p>
        <p>Driven by a relentless pursuit of innovation and excellence, we quickly expanded our team and capabilities, earning the trust of clients across industries.</p>
        <p>Today, TechGenius stands as a testament to the transformative potential of technology, with a portfolio of successful projects and a reputation for delivering exceptional results.</p>
      </section>
      <section className="leadership-team">
        <h2>Our Leadership</h2>
        <div className="leader">
          <img src="/images/leader1.webp" alt="Leader 1" />
          <div className="leader-details">
            <h3>John Doe</h3>
            <p>Co-Founder & CEO</p>
            <p>With over 12 years of experience in the tech industry, John is a visionary leader who drives TechGenius's strategic direction and growth.</p>
          </div>
        </div>
        <div className="leader">
          <img src="/images/leader2.avif" alt="Leader 2" />
          <div className="leader-details">
            <h3>Jane Smith</h3>
            <p>Co-Founder & CTO</p>
            <p>Jane is a tech prodigy with a passion for innovation. She leads our technical team in developing groundbreaking solutions that push the boundaries of what's possible.</p>
          </div>
        </div>
        <div className="leader">
          <img src="/images/leader3.avif" alt="Leader 3" />
          <div className="leader-details">
            <h3>Alex Johnson</h3>
            <p>Head of Product Design</p>
            <p>Alex is a creative genius who brings ideas to life through stunning designs and intuitive user experiences. His expertise ensures that every product we deliver exceeds expectations.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
