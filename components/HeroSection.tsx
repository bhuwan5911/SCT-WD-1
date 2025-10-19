
import React from 'react';

/**
 * The full-screen Hero section at the top of the page.
 */
const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 p-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Modern Solutions for a Digital World
        </h1>
        <p className="text-lg md:text-xl text-light-text mb-8 max-w-2xl mx-auto">
          We build responsive, fast, and engaging web experiences that help your business grow and succeed.
        </p>
        <a
          href="#features"
          className="bg-accent text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
