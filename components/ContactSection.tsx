
import React from 'react';
import { SocialIcon } from './icons/SocialIcon';

/**
 * The final section of the page, containing a contact form and the footer.
 */
const ContactSection: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Thank you for your message!');
    // In a real application, you would handle form submission here.
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-soft-bg rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 bg-soft-bg rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-3 bg-soft-bg rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-accent text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <footer className="mt-20 text-center text-gray-400">
          <div className="flex justify-center space-x-4 mb-4">
             <SocialIcon platform="twitter" />
             <SocialIcon platform="github" />
             <SocialIcon platform="linkedin" />
          </div>
          <p>&copy; {new Date().getFullYear()} Interactive Landing Page. All Rights Reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
