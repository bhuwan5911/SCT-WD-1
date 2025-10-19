
import React from 'react';

/**
 * A section providing information about the company or mission.
 * Features a contrasting background to stand out.
 */
const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-soft-bg">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          About Us
        </h2>
        <p className="text-lg text-light-text mb-6 leading-relaxed">
          We are a team of passionate developers and designers dedicated to creating high-quality digital products. Our mission is to leverage cutting-edge technology to solve real-world problems and deliver exceptional value to our clients. We believe in collaboration, innovation, and a user-centric approach to everything we do.
        </p>
        <p className="text-lg text-light-text leading-relaxed">
          From initial concept to final deployment, we work closely with our partners to ensure their vision is brought to life. Our commitment to excellence and attention to detail sets us apart and drives our success.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
