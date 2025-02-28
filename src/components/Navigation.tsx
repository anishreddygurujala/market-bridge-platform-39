
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Collections', path: '/services' },
    { name: 'Our Story', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 glass shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="font-display text-xl md:text-2xl font-semibold tracking-tight">
          <span className="text-primary">
            Bani Saad
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path}
                  className={({ isActive }) => 
                    `relative font-medium px-1 py-2 transition-colors duration-300 elegant-underline
                    ${isActive 
                      ? 'text-primary after:w-full' 
                      : 'text-gray-600 hover:text-primary'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Shop Button */}
        <a 
          href="https://banisaad.myshopify.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-colors"
        >
          <ShoppingBag className="h-4 w-4" />
          <span>Shop Now</span>
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-900" />
          ) : (
            <Menu className="h-6 w-6 text-gray-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="container mx-auto px-6">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path}
                  className={({ isActive }) => 
                    `block py-2 font-medium transition-colors duration-300
                    ${isActive 
                      ? 'text-primary' 
                      : 'text-gray-600 hover:text-primary'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <a 
                href="https://banisaad.myshopify.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-md w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Shop Now</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
