
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block font-display text-xl font-semibold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
                Bani Saad
              </span>
            </Link>
            
            <p className="text-gray-600 max-w-xs">
              Empowering businesses with innovative digital marketing and web development solutions.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-black transition-colors duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                { name: 'Website Development', path: '/services#website-development' },
                { name: 'Digital Marketing', path: '/services#digital-marketing' },
                { name: 'SEO Optimization', path: '/services#seo' },
                { name: 'Social Media Management', path: '/services#social-media' },
                { name: 'E-commerce Solutions', path: '/services#ecommerce' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-600 hover:text-black transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-600 hover:text-black transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-gray-500 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  123 Business Avenue, Suite 101<br />
                  Riyadh, Saudi Arabia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-gray-500 flex-shrink-0" />
                <a href="tel:+966123456789" className="text-gray-600 hover:text-black transition-colors duration-300">
                  +966 12 345 6789
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-gray-500 flex-shrink-0" />
                <a href="mailto:info@banisaad.com" className="text-gray-600 hover:text-black transition-colors duration-300">
                  info@banisaad.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Bani Saad Digital Marketing & Website Development. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
