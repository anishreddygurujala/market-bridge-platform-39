import { useEffect } from 'react';
import { Heart, Globe, Star, ShoppingBag } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const OurStory = () => {
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
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-fashion-50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="inline-block font-medium text-sm px-3 py-1 bg-primary text-white rounded-full animate-on-scroll">
                Our Journey
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold animate-on-scroll">
                The Story of Bani Saad
              </h1>
              <p className="text-gray-600 text-lg md:text-xl animate-on-scroll">
                A movement that redefines the intersection of heritage and modernity through
                exquisite fashion and timeless jewelry.
              </p>
            </div>
          </div>
        </section>
        
        {/* Founder's Message */}
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-2 relative animate-on-scroll">
                <div className="absolute inset-0 bg-fashion-50 rounded-2xl transform -rotate-2 -z-10"></div>
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop" 
                    alt="Fatima Al-Saad, Founder" 
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-3 space-y-6 animate-on-scroll">
                <span className="inline-block font-medium text-sm px-3 py-1 bg-fashion-100 text-fashion-700 rounded-full">
                  Founder's Message
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  A Vision of Empowerment
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p className="italic text-lg text-gray-700">
                    "At Bani Saad, we are not just a fashion line; we are a movement that redefines the 
                    intersection of heritage and modernity. Inspired by rich cultural traditions, our mission 
                    is to empower women globally to reclaim their narratives through exquisite fashion 
                    and timeless jewelry."
                  </p>
                  <p>
                    Growing up surrounded by the artistry and traditions of my community, I witnessed 
                    the incredible talent of women artisans whose work often went unrecognized. Their 
                    intricate designs and craftsmanship told stories of resilience, creativity, and cultural 
                    pride that deserved to be celebrated.
                  </p>
                  <p>
                    This brand was born from my desire to create pathways for these talented women to 
                    achieve economic independence while preserving rich heritage. Each piece in our 
                    collections represents not just exceptional craftsmanship but also a step toward 
                    a world where women's creativity and contributions are valued and celebrated.
                  </p>
                  <p className="text-right font-display italic">
                    - Fatima Al-Saad, Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Philosophy */}
        <section className="section-padding bg-fashion-700 text-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block font-medium text-sm px-3 py-1 bg-white text-fashion-700 rounded-full animate-on-scroll">
                Our Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-8 animate-on-scroll">
                Elegance with Purpose
              </h2>
              
              <div className="space-y-12 animate-on-scroll text-left">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="md:w-1/4 flex justify-center">
                      <Heart className="h-16 w-16 text-white" />
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-2xl font-display font-semibold mb-4">When Women Thrive, Communities Flourish</h3>
                      <p className="text-white/80">
                        We believe that empowering women economically creates ripple effects that benefit 
                        entire communities. By providing women artisans with the tools, training, and 
                        platform to showcase their talents, we're not just creating beautiful pieces—we're 
                        fostering sustainable change.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="md:w-1/4 flex justify-center">
                      <Star className="h-16 w-16 text-white" />
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-2xl font-display font-semibold mb-4">Heritage as Inspiration, Not Limitation</h3>
                      <p className="text-white/80">
                        Our designs honor traditional motifs and techniques while reimagining them for the 
                        modern woman. This approach allows us to preserve cultural heritage while creating 
                        pieces that resonate with women across generations and borders.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="md:w-1/4 flex justify-center">
                      <Globe className="h-16 w-16 text-white" />
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-2xl font-display font-semibold mb-4">Sustainability as Responsibility</h3>
                      <p className="text-white/80">
                        Our commitment to the planet is as important as our commitment to people. Through 
                        ethical sourcing, sustainable practices, and responsible production, we ensure that 
                        our environmental footprint honors the legacy we wish to leave for future generations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Journey */}
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block font-medium text-sm px-3 py-1 bg-fashion-100 text-fashion-700 rounded-full animate-on-scroll">
                  Our Journey
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 animate-on-scroll">
                  Milestones That Shaped Us
                </h2>
              </div>
              
              <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:w-0.5 before:h-full before:bg-fashion-100">
                <div className="relative flex flex-col md:flex-row items-center animate-on-scroll">
                  <div className="flex items-center justify-center order-1 md:order-1 md:w-1/2 pb-4 md:pb-0 md:pr-10 text-right">
                    <div>
                      <span className="block text-gray-500">2015</span>
                      <h3 className="font-display text-xl font-semibold">The Beginning</h3>
                      <p className="text-gray-600 mt-2">
                        Fatima Al-Saad begins working with five women artisans from her community to create the first Bani Saad jewelry collection.
                      </p>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center w-10 h-10 rounded-full border-4 border-fashion-50 bg-fashion-500 text-white md:mx-auto md:left-0 md:right-0">
                    <Star className="w-4 h-4" />
                  </div>
                  <div className="order-2 md:order-2 md:w-1/2 pt-4 md:pt-0 md:pl-10">
                    <img 
                      src="https://images.unsplash.com/photo-1617038260897-8f129e1688ce?q=80&w=500&auto=format&fit=crop" 
                      alt="Beginning of Bani Saad" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center animate-on-scroll">
                  <div className="flex items-center justify-center order-2 md:order-1 md:w-1/2 pt-4 md:pt-0 md:pr-10 text-right">
                    <img 
                      src="https://images.unsplash.com/photo-1554141220-83411835a60b?q=80&w=500&auto=format&fit=crop" 
                      alt="First collection launch" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="absolute flex items-center justify-center w-10 h-10 rounded-full border-4 border-fashion-50 bg-fashion-500 text-white md:mx-auto md:left-0 md:right-0">
                    <Star className="w-4 h-4" />
                  </div>
                  <div className="order-1 md:order-2 md:w-1/2 pb-4 md:pb-0 md:pl-10">
                    <span className="block text-gray-500">2017</span>
                    <h3 className="font-display text-xl font-semibold">First Major Collection</h3>
                    <p className="text-gray-600 mt-2">
                      Launch of "Heritage Reimagined," our first major collection featuring 25 artisans and garnering international attention.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center animate-on-scroll">
                  <div className="flex items-center justify-center order-1 md:order-1 md:w-1/2 pb-4 md:pb-0 md:pr-10 text-right">
                    <div>
                      <span className="block text-gray-500">2019</span>
                      <h3 className="font-display text-xl font-semibold">Artisan Training Center</h3>
                      <p className="text-gray-600 mt-2">
                        Opening of our first Artisan Training Center, providing education and resources to women in rural communities.
                      </p>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center w-10 h-10 rounded-full border-4 border-fashion-50 bg-fashion-500 text-white md:mx-auto md:left-0 md:right-0">
                    <Star className="w-4 h-4" />
                  </div>
                  <div className="order-2 md:order-2 md:w-1/2 pt-4 md:pt-0 md:pl-10">
                    <img 
                      src="https://images.unsplash.com/photo-1596939122461-e48c8349d9b0?q=80&w=500&auto=format&fit=crop" 
                      alt="Artisan Training Center" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center animate-on-scroll">
                  <div className="flex items-center justify-center order-2 md:order-1 md:w-1/2 pt-4 md:pt-0 md:pr-10 text-right">
                    <img 
                      src="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=500&auto=format&fit=crop" 
                      alt="Global launch" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="absolute flex items-center justify-center w-10 h-10 rounded-full border-4 border-fashion-50 bg-fashion-500 text-white md:mx-auto md:left-0 md:right-0">
                    <Star className="w-4 h-4" />
                  </div>
                  <div className="order-1 md:order-2 md:w-1/2 pb-4 md:pb-0 md:pl-10">
                    <span className="block text-gray-500">2022</span>
                    <h3 className="font-display text-xl font-semibold">Global Expansion</h3>
                    <p className="text-gray-600 mt-2">
                      Expansion of our e-commerce platform, bringing Bani Saad creations to a global audience and supporting over 100 artisans.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center animate-on-scroll">
                  <div className="flex items-center justify-center order-1 md:order-1 md:w-1/2 pb-4 md:pb-0 md:pr-10 text-right">
                    <div>
                      <span className="block text-gray-500">Today</span>
                      <h3 className="font-display text-xl font-semibold">Continuing Our Mission</h3>
                      <p className="text-gray-600 mt-2">
                        Today, Bani Saad continues to grow its impact, with plans for additional training centers and expanded collections.
                      </p>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center w-10 h-10 rounded-full border-4 border-fashion-50 bg-fashion-500 text-white md:mx-auto md:left-0 md:right-0">
                    <Star className="w-4 h-4" />
                  </div>
                  <div className="order-2 md:order-2 md:w-1/2 pt-4 md:pt-0 md:pl-10">
                    <img 
                      src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?q=80&w=500&auto=format&fit=crop" 
                      alt="Continuing the mission" 
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
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
                Be part of our journey to empower women through elegance, heritage, and craftsmanship. 
                Every purchase supports the artisans behind our creations and contributes to a legacy of positive change.
              </p>
              <div className="animate-on-scroll">
                <a 
                  href="https://banisaad.myshopify.com/collections/all" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-medium rounded-md transition-all duration-300 hover:bg-primary/90"
                >
                  Explore Our Collections
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

export default OurStory;
