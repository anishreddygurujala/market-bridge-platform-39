
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, LineChart, Search, Instagram, ShoppingCart, BarChart2, 
  Code, Smartphone, Zap, FileText, Mail, ArrowRight 
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Services = () => {
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
      id: "website-development",
      title: "Website Development",
      description: "We create beautiful, responsive websites that are designed to convert visitors into customers. Our development process ensures that your website is not only visually appealing but also optimized for performance and search engines.",
      features: [
        "Custom design and development",
        "Responsive and mobile-friendly",
        "SEO-optimized structure",
        "Fast loading speeds",
        "User-friendly navigation",
        "Integration with analytics"
      ],
      icon: <Globe className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Our comprehensive digital marketing strategies help businesses reach their target audience, increase brand awareness, and drive conversions. We use data-driven approaches to ensure your marketing budget is spent effectively.",
      features: [
        "Customized marketing strategies",
        "Campaign planning and execution",
        "Budget optimization",
        "Performance tracking",
        "Competitor analysis",
        "Target audience research"
      ],
      icon: <LineChart className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a"
    },
    {
      id: "seo",
      title: "SEO Optimization",
      description: "Improve your website's visibility in search engines with our SEO services. We focus on sustainable, white-hat techniques that build long-term success and protect your website from algorithm updates.",
      features: [
        "Keyword research and analysis",
        "On-page SEO optimization",
        "Technical SEO improvements",
        "Content strategy development",
        "Link building strategies",
        "Regular performance reporting"
      ],
      icon: <Search className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1"
    },
    {
      id: "social-media",
      title: "Social Media Management",
      description: "Build a strong presence on social media platforms with our management services. We handle everything from content creation to community engagement, allowing you to focus on running your business.",
      features: [
        "Platform strategy development",
        "Content creation and curation",
        "Community management",
        "Paid social campaigns",
        "Performance analytics",
        "Competitor monitoring"
      ],
      icon: <Instagram className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7"
    },
    {
      id: "ecommerce",
      title: "E-commerce Solutions",
      description: "Transform your business with our e-commerce solutions. We build online stores that are easy to manage, secure, and designed to maximize sales through an optimized customer journey.",
      features: [
        "Store setup and configuration",
        "Payment gateway integration",
        "Inventory management systems",
        "Mobile shopping optimization",
        "Product listing optimization",
        "Checkout process improvement"
      ],
      icon: <ShoppingCart className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
    },
    {
      id: "analytics",
      title: "Analytics & Reporting",
      description: "Gain valuable insights into your digital performance with our analytics and reporting services. We track key metrics and provide actionable recommendations to improve your results.",
      features: [
        "Custom dashboard creation",
        "Key metric tracking",
        "User behavior analysis",
        "Conversion funnel optimization",
        "Regular performance reports",
        "Data-driven recommendations"
      ],
      icon: <BarChart2 className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    }
  ];

  const additionalServices = [
    {
      title: "Web Application Development",
      icon: <Code className="h-5 w-5" />
    },
    {
      title: "Mobile Responsive Design",
      icon: <Smartphone className="h-5 w-5" />
    },
    {
      title: "Performance Optimization",
      icon: <Zap className="h-5 w-5" />
    },
    {
      title: "Content Creation",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "Email Marketing",
      icon: <Mail className="h-5 w-5" />
    }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="inline-block font-medium text-sm px-3 py-1 bg-black text-white rounded-full animate-on-scroll">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold animate-on-scroll">
                Comprehensive Digital Solutions
              </h1>
              <p className="text-gray-600 text-lg md:text-xl animate-on-scroll">
                We offer a full spectrum of digital marketing and development services
                to help your business thrive in the digital landscape.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            {services.map((service, index) => (
              <div 
                key={index}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index !== 0 ? 'mt-20 pt-20 border-t border-gray-100' : ''
                }`}
              >
                <div 
                  className={`space-y-6 animate-on-scroll ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 text-gray-900">
                    {service.icon}
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-display font-bold">
                    {service.title}
                  </h2>
                  
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg 
                          className="h-5 w-5 text-black mt-1 mr-3 flex-shrink-0" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div 
                  className={`relative animate-on-scroll ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="absolute inset-0 bg-gray-100 rounded-2xl transform rotate-2 -z-10"></div>
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-auto object-cover aspect-[4/3]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Additional Services */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto">
            <div className="max-w-xl mx-auto text-center mb-12">
              <span className="inline-block font-medium text-sm px-3 py-1 bg-gray-100 text-gray-800 rounded-full animate-on-scroll">
                More Services
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-4 animate-on-scroll">
                Additional Expertise
              </h2>
              <p className="text-gray-600 animate-on-scroll">
                Beyond our core services, we offer specialized solutions to address your unique business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 stagger-animation">
              {additionalServices.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center animate-on-scroll card-hover"
                >
                  <div className="mx-auto mb-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-900">
                    {service.icon}
                  </div>
                  <h3 className="text-base font-semibold">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section-padding bg-black text-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold animate-on-scroll">
                Ready to Grow Your Business?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto animate-on-scroll">
                Contact us today to discuss your project and discover how our services
                can help you achieve your business goals.
              </p>
              <div className="animate-on-scroll">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 font-medium rounded-md transition-all duration-300 hover:bg-gray-100"
                >
                  Get in Touch
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

export default Services;
