
import React from 'react';
import { FeatureIcon } from './icons/FeatureIcon';

const featuresData = [
  {
    title: 'Responsive Design',
    description: 'Our websites look great on all devices, from mobile phones to desktop computers.',
  },
  {
    title: 'High Performance',
    description: 'We optimize for speed to ensure a fast and smooth user experience.',
  },
  {
    title: 'Interactive UI',
    description: 'Engaging user interfaces that are intuitive and easy to use.',
  },
];

/**
 * A section to highlight key features or services.
 * Uses a responsive grid for the feature cards.
 */
const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-soft-bg p-8 rounded-lg shadow-xl transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center justify-center h-16 w-16 bg-accent rounded-full mx-auto mb-6">
                 <FeatureIcon />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-light-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
