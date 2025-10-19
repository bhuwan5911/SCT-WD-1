import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

/**
 * The main App component.
 * It serves as the root of the application, organizing the layout and rendering all major sections.
 */
// Fix: Changed return type from JSX.Element to React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
function App(): React.ReactElement {
  return (
    <div className="bg-primary text-light-text font-sans">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
