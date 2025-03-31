
import { ArrowRight, ShoppingBag } from 'lucide-react';
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
      <div className="absolute inset-0 bg-gradient-to-b from-fashion-50 to-transparent z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <span className="inline-block animate-on-scroll font-medium text-sm px-3 py-1 bg-fashion-100 text-fashion-700 rounded-full">
                Crafted with Purpose
              </span>
              
              <h1 className="animate-on-scroll font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Where Luxury Meets <span className="text-primary">Legacy</span>
              </h1>
              
              <p className="animate-on-scroll text-gray-600 text-lg md:text-xl max-w-lg text-balance">
                Exquisite fashion and timeless jewelry that empowers women and celebrates heritage.
                Each piece tells a story of strength and resilience.
              </p>
            </div>
            
            <div className="animate-on-scroll flex flex-col sm:flex-row gap-4">
              <a 
                href="https://banisaad.myshopify.com/collections/all" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-md transition-all duration-300 hover:bg-primary/90"
              >
                Shop Collection
                <ShoppingBag className="ml-2 h-4 w-4" />
              </a>
              
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-fashion-200 text-gray-800 font-medium rounded-md transition-all duration-300 hover:bg-fashion-50 hover:border-fashion-300"
              >
                Our Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-6 animate-on-scroll">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-fashion-100 to-fashion-50 rounded-2xl -z-10 transform rotate-2"></div>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=1976&auto=format&fit=crop"
                  alt="Elegant modest fashion with jewelry" 
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
