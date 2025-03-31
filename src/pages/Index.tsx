import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Gem, ShoppingBag, Heart, Sparkles, Leaf, Globe, ArrowRight 
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

  const collections = [
    {
      icon: <Gem className="w-6 h-6" />,
      title: "Exquisite Jewelry",
      description: "Timeless pieces that celebrate feminine grace and power through traditional craftsmanship and modern design.",
      imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
      collectionId: "jewelry"
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Elegant Fashion",
      description: "Clothing that blends cultural heritage with contemporary aesthetics, creating unique expressions of identity.",
      imageUrl: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1000&auto=format&fit=crop",
      collectionId: "fashion"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Heritage Collection",
      description: "Designs inspired by rich cultural traditions, preserving heritage for future generations.",
      imageUrl: "https://images.unsplash.com/photo-1606131731446-5568d87113aa?q=80&w=1000&auto=format&fit=crop",
      collectionId: "heritage"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Women Empowerment",
      description: "Supporting women artisans with tools and resources to craft their dreams and achieve economic independence."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Cultural Heritage",
      description: "Honoring rich cultural traditions by incorporating heritage elements into contemporary designs."
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Sustainability",
      description: "Commitment to ethical sourcing and sustainable practices that respect our planet and its resources."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Community",
      description: "Creating a worldwide network of women who celebrate their heritage and support each other's growth."
    }
  ];

  const testimonials = [
    {
      quote: "These pieces aren't just beautiful—they tell a story of empowerment that resonates with me every time I wear them.",
      author: "Layla A.",
      location: "Dubai"
    },
    {
      quote: "Bani Saad's commitment to sustainability while honoring heritage is exactly what modern luxury should be about.",
      author: "Sarah M.",
      location: "New York"
    },
    {
      quote: "As a woman entrepreneur myself, I'm inspired by what this brand stands for. The quality and craftsmanship are exceptional.",
      author: "Noor K.",
      location: "Riyadh"
    }
  ];

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        
        {/* Collections Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
              <span className="inline-block font-medium text-sm px-3 py-1 bg-fashion-100 text-fashion-700 rounded-full animate-on-scroll">
                Our Collections
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-4 animate-on-scroll">
                Timeless Elegance
              </h2>
              <p className="text-gray-600 animate-on-scroll">
                Discover our curated collections of jewelry and fashion pieces that 
                celebrate heritage, craftsmanship, and the empowerment of women.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
              {collections.map((collection, index) => (
                <ServiceCard
                  key={index}
                  icon={collection.icon}
                  title={collection.title}
                  description={collection.description}
                  imageUrl={collection.imageUrl}
                  collectionId={collection.collectionId}
                />
              ))}
            </div>
            
            <div className="text-center mt-12 animate-on-scroll">
              <a 
                href="https://banisaad.myshopify.com/collections/all"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-md transition-all duration-300 hover:bg-primary/90"
              >
                Shop All Collections
                <ShoppingBag className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="section-padding bg-fashion-50">
          <div className="container mx-auto">
            <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
              <span className="inline-block font-medium text-sm px-3 py-1 bg-white text-fashion-700 rounded-full animate-on-scroll">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-4 animate-on-scroll">
                More Than Just Fashion
              </h2>
              <p className="text-gray-600 animate-on-scroll">
                At Bani Saad, our commitment extends beyond creating beautiful pieces; 
                we stand for empowerment, heritage, and sustainable craftsmanship.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 stagger-animation">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-sm border border-fashion-100 animate-on-scroll card-hover"
                >
                  <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-full bg-fashion-50 text-fashion-700">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
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
                <span className="inline-block font-medium text-sm px-3 py-1 bg-fashion-100 text-fashion-700 rounded-full">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-balance">
                  The Legacy of Bani Saad
                </h2>
                <p className="text-gray-600">
                  Inspired by rich cultural heritage, our mission is to empower women globally to reclaim 
                  their narratives through exquisite fashion and timeless jewelry. We believe that when 
                  women thrive, communities flourish.
                </p>
                <p className="text-gray-600">
                  Our commitment to elegance extends beyond aesthetics; it is woven into the very fabric 
                  of our purpose. By providing women artisans with the tools and resources to craft their 
                  dreams, we ignite a renaissance of creativity and economic independence that resonates 
                  far and wide.
                </p>
                <div>
                  <Link 
                    to="/about" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-md transition-all duration-300 hover:bg-primary/90"
                  >
                    Discover Our Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="relative animate-on-scroll">
                <div className="absolute inset-0 bg-fashion-50 rounded-2xl transform rotate-3 -z-10"></div>
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1504198322253-cfa87a0ff60f?q=80&w=1000&auto=format&fit=crop" 
                    alt="Artisan crafting jewelry" 
                    className="w-full h-auto object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="section-padding bg-fashion-700 text-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold animate-on-scroll">
                Voices of Our Community
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 stagger-animation">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="animate-on-scroll">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left h-full flex flex-col">
                      <div className="mb-4 text-fashion-100">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      <p className="text-white/90 mb-4 flex-grow">{testimonial.quote}</p>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-white/70 text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section-padding bg-fashion-50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold animate-on-scroll">
                Join Our Movement
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto animate-on-scroll">
                Become part of our community of women who celebrate heritage, craftsmanship, 
                and empowerment through exquisite fashion and jewelry.
              </p>
              <div className="animate-on-scroll">
                <a 
                  href="https://banisaad.myshopify.com/collections/all" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-medium rounded-md transition-all duration-300 hover:bg-primary/90"
                >
                  Shop Our Collections
                  <ShoppingBag className="ml-2 h-4 w-4" />
                </a>
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
