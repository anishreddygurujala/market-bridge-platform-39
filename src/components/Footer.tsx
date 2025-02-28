
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ShoppingBag } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-fashion-50 border-t border-fashion-100">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block font-display text-xl font-semibold tracking-tight">
              <span className="text-primary">
                Bani Saad
              </span>
            </Link>
            
            <p className="text-gray-600 max-w-xs">
              Where luxury meets legacy, and empowerment becomes the most exquisite expression of beauty.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-fashion-500 hover:text-fashion-700 transition-colors duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-fashion-500 hover:text-fashion-700 transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-fashion-500 hover:text-fashion-700 transition-colors duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-fashion-500 hover:text-fashion-700 transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Collections */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Collections</h3>
            <ul className="space-y-3">
              {[
                { name: 'Jewelry Collection', path: 'https://banisaad.myshopify.com/collections/jewelry' },
                { name: 'Fashion Pieces', path: 'https://banisaad.myshopify.com/collections/fashion' },
                { name: 'Heritage Line', path: 'https://banisaad.myshopify.com/collections/heritage' },
                { name: 'Sustainable Crafts', path: 'https://banisaad.myshopify.com/collections/sustainable' },
                { name: 'Special Occasions', path: 'https://banisaad.myshopify.com/collections/special' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Collections', path: '/services' },
                { name: 'Our Story', path: '/contact' },
                { 
                  name: 'Shop Now', 
                  path: 'https://banisaad.myshopify.com',
                  external: true
                }
              ].map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a 
                      href={link.path} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center"
                    >
                      {link.name}
                      {link.name === 'Shop Now' && <ShoppingBag className="ml-2 h-3 w-3" />}
                    </a>
                  ) : (
                    <Link 
                      to={link.path} 
                      className="text-gray-600 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-fashion-500 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  123 Fashion Avenue, Suite 101<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-fashion-500 flex-shrink-0" />
                <a href="tel:+12123456789" className="text-gray-600 hover:text-primary transition-colors duration-300">
                  +1 (212) 345-6789
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-fashion-500 flex-shrink-0" />
                <a href="mailto:info@banisaad.com" className="text-gray-600 hover:text-primary transition-colors duration-300">
                  info@banisaad.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-fashion-100 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Bani Saad Fashion & Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
