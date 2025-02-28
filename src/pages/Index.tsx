
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  LineChart, BarChart2, Globe, Search, Instagram, ShoppingCart, Users, ArrowRight 
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';

const Index = () => {
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

  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website Development",
      description: "Custom websites built for performance, user experience, and business growth."
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Digital Marketing",
      description: "Data-driven campaigns that deliver measurable ROI and customer acquisition."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO Optimization",
      description: "Improve visibility and drive organic traffic through search engine optimization."
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Social Media Management",
      description: "Engaging content and management strategies for brand growth on social platforms."
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "E-commerce Solutions",
      description: "Complete online store setup with payment integration and inventory management."
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Analytics & Reporting",
      description: "Detailed insights and reports to track performance and guide future strategies."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "250+", label: "Active Clients" },
    { number: "8+", label: "Years Experience" }
  ];

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        
        {/* Services Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
              <span className="inline-block font-medium text-sm px-3 py-1 bg-gray-100 text-gray-800 rounded-full animate-on-scroll">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-4 animate-on-scroll">
                Comprehensive Digital Solutions
              </h2>
              <p className="text-gray-600 animate-on-scroll">
                We offer a full spectrum of digital marketing and development services
                to help your business thrive in the digital landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 stagger-animation">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
            
            <div className="text-center mt-12 animate-on-scroll">
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-gray-300 text-gray-800 font-medium rounded-md transition-all duration-300 hover:bg-gray-50 hover:border-gray-400"
              >
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-on-scroll">
                  <div className="text-4xl md:text-5xl font-display font-bold text-black mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* About Preview Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-on-scroll">
                <span className="inline-block font-medium text-sm px-3 py-1 bg-gray-100 text-gray-800 rounded-full">
                  About Us
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-balance">
                  We Help Businesses Grow Their Digital Presence
                </h2>
                <p className="text-gray-600">
                  Bani Saad is a full-service digital marketing and website development agency 
                  dedicated to helping businesses establish and grow their online presence. 
                  With a team of experienced professionals, we deliver tailored solutions that 
                  align with your business goals and drive results.
                </p>
                <ul className="space-y-3">
                  {[
                    "Strategic approach to digital marketing",
                    "Custom website solutions for your business",
                    "Data-driven decision making",
                    "Dedicated support and customer service"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-black mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <Link 
                    to="/about" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-medium rounded-md transition-all duration-300 hover:bg-gray-800"
                  >
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="relative animate-on-scroll">
                <div className="absolute inset-0 bg-gray-100 rounded-2xl transform rotate-3 -z-10"></div>
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                    alt="Our Team" 
                    className="w-full h-auto object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section-padding bg-gray-900 text-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold animate-on-scroll">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto animate-on-scroll">
                Let's work together to create a tailored digital strategy that helps your business 
                reach its full potential in the digital world.
              </p>
              <div className="animate-on-scroll">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 font-medium rounded-md transition-all duration-300 hover:bg-gray-100"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
