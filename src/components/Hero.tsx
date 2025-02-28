
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.1
    });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 to-transparent z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="inline-block animate-on-scroll font-medium text-sm px-3 py-1 bg-black text-white rounded-full">
                Digital Marketing & Website Development
              </span>
              
              <h1 className="animate-on-scroll font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Elevate Your Digital <span className="relative inline-block">
                  Presence
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-black to-gray-400"></span>
                </span>
              </h1>
              
              <p className="animate-on-scroll text-gray-600 text-lg md:text-xl max-w-lg text-balance">
                We combine strategic marketing solutions with beautiful web experiences 
                to help your business thrive in the digital landscape.
              </p>
            </div>
            
            <div className="animate-on-scroll flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-medium rounded-md transition-all duration-300 hover:bg-gray-800"
              >
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-gray-300 text-gray-800 font-medium rounded-md transition-all duration-300 hover:bg-gray-50 hover:border-gray-400"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-6 animate-on-scroll">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl -z-10 transform rotate-2"></div>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Digital Marketing Professional" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
