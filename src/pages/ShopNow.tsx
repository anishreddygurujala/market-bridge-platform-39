
import { useState, useEffect } from 'react';
import { Gem, ShoppingBag, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';

const ShopNow = () => {
  const [isLoading, setIsLoading] = useState(true);

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

    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
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
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "All Collections",
      description: "Browse our complete catalog featuring all of our exquisite fashion and jewelry pieces.",
      imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop",
      collectionId: "all"
    }
  ];

  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-16 bg-fashion-50">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto text-center mb-12">
              <span className="inline-block font-medium text-sm px-3 py-1 bg-fashion-100 text-fashion-700 rounded-full animate-on-scroll">
                Our Collections
              </span>
              <h1 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-4 animate-on-scroll">
                Shop Our Collections
              </h1>
              <p className="text-gray-600 animate-on-scroll">
                Discover our curated collections of jewelry and fashion pieces that 
                celebrate heritage, craftsmanship, and the empowerment of women.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="bg-gray-100 rounded-xl h-80 animate-pulse"></div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
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
            )}
          </div>
        </section>

        <section className="py-16 bg-fashion-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Visit Our Shopify Store
              </h2>
              <p className="text-gray-600 mb-8">
                For a complete catalog and secure checkout experience, visit our Shopify store where you can browse all collections, see detailed product information, and make purchases.
              </p>
              <a 
                href="https://banisaad.myshopify.com/collections/all" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-medium rounded-md transition-all duration-300 hover:bg-primary/90"
              >
                Visit Full Store
                <ShoppingBag className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ShopNow;
