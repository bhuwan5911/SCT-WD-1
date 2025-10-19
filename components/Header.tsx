import React, { useState, useEffect } from 'react';
import { MenuIcon } from './icons/MenuIcon';
import { CloseIcon } from './icons/CloseIcon';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#features', label: 'Features' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

/**
 * Renders the fixed navigation header.
 * - Becomes solid on scroll.
 * - Toggles a mobile menu on smaller screens.
 * - Handles smooth scrolling to page sections.
 */
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      // Add 'scrolled' class if user scrolls more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    // Add event listener on mount
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggles the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Closes the mobile menu, used when a link is clicked
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  /**
   * Prevents default anchor behavior and smoothly scrolls to the target section.
   * @param event The mouse event from clicking a link.
   */
  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    if (!targetId) return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-accent shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" onClick={handleSmoothScroll} className="text-2xl font-bold text-white">
          Innovate
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleSmoothScroll}
              className="text-white px-4 py-2 rounded-lg hover:bg-primary hover:bg-opacity-75 transition-all duration-300 ease-in-out"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle mobile menu">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-accent transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
        } overflow-hidden`}
      >
        <nav className="flex flex-col items-center space-y-4 px-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                handleSmoothScroll(e);
                closeMobileMenu();
              }}
              className="text-white text-lg w-full text-center py-2 rounded-lg hover:bg-primary hover:bg-opacity-75 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;