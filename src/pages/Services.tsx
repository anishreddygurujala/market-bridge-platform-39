
import { useEffect } from 'react';
import { 
  Gem, Crown, Heart, Leaf, Star, Sparkles, ShoppingBag
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Collections = () => {
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
      id: "jewelry",
      title: "Jewelry Collection",
      description: "Our jewelry collection celebrates feminine strength through timeless designs that blend traditional craftsmanship with contemporary aesthetics. Each piece tells a story of heritage and empowerment.",
      features: [
        "Handcrafted by women artisans",
        "Ethically sourced materials",
        "Traditional motifs with modern designs",
        "Symbolic elements that celebrate heritage",
        "Pieces for everyday wear and special occasions",
        "Custom designs available"
      ],
      icon: <Gem className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "fashion",
      title: "Fashion Collection",
      description: "Our clothing line embraces the rich textile traditions of our heritage while offering modern silhouettes that celebrate the beauty and strength of women. From casual wear to statement pieces, our fashion collection empowers through elegance.",
      features: [
        "Sustainable and ethical fabrics",
        "Traditional embroidery techniques",
        "Comfortable yet elegant designs",
        "Versatile pieces for various occasions",
        "Inclusive sizing options",
        "Seasonless approach to fashion"
      ],
      icon: <Crown className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1552874869-5c39ec9288dc?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "heritage",
      title: "Heritage Line",
      description: "The Heritage Line pays homage to the rich cultural tapestry of the Bani Saad tribe. These limited edition pieces feature intricate designs and symbols that have been passed down through generations, preserving our cultural legacy.",
      features: [
        "Designs inspired by tribal symbols",
        "Limited edition collections",
        "Educational component with each piece",
        "Collaborative projects with tribal elders",
        "Revival of traditional techniques",
        "Premium materials and craftsmanship"
      ],
      icon: <Heart className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1606131731446-5568d87113aa?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "sustainable",
      title: "Sustainable Collection",
      description: "Our commitment to the planet is reflected in our Sustainable Collection, which uses eco-friendly materials and practices. These pieces demonstrate that luxury can be achieved while honoring our responsibility to the environment.",
      features: [
        "Recycled metals and gemstones",
        "Organic and natural fabrics",
        "Zero-waste design principles",
        "Water conservation in production",
        "Plastic-free packaging",
        "Carbon-neutral shipping options"
      ],
      icon: <Leaf className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "bridal",
      title: "Bridal Collection",
      description: "Our Bridal Collection celebrates one of life's most significant moments with pieces that honor tradition while embracing modern sensibilities. Each piece is designed to make a woman feel her most beautiful on her special day.",
      features: [
        "Custom designs available",
        "Heirloom quality craftsmanship",
        "Traditional and contemporary options",
        "Matching sets for bridal parties",
        "Consultation services available",
        "Pre and post-wedding looks"
      ],
      icon: <Star className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1610222034376-8dd1149e0e60?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "limited",
      title: "Limited Edition",
      description: "Our Limited Edition collections feature exclusive designs created in collaboration with guest designers and artisans. These unique pieces represent the intersection of diverse creative visions while maintaining our commitment to empowerment and heritage.",
      features: [
        "Exclusive designs with limited runs",
        "Collaborative projects with guest artisans",
        "Certificate of authenticity",
        "Numbered pieces",
        "Special packaging and presentation",
        "Collector's value"
      ],
      icon: <Sparkles className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-fashion-50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="inline-block font-medium text-sm px-3 py-1 bg-primary text-white rounded-full animate-on-scroll">
                Our Collections
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold animate-on-scroll">
                Exquisite Designs with Purpose
              </h1>
              <p className="text-gray-600 text-lg md:text-xl animate-on-scroll">
                Discover our curated collections of jewelry and fashion that celebrate 
                heritage, craftsmanship, and the empowerment of women.
              </p>
            </div>
          </div>
        </section>
        
        {/* Collections Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            {collections.map((collection, index) => (
              <div 
                key={index}
                id={collection.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index !== 0 ? 'mt-20 pt-20 border-t border-fashion-100' : ''
                }`}
              >
                <div 
                  className={`space-y-6 animate-on-scroll ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-fashion-50 text-fashion-700">
                    {collection.icon}
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-display font-bold">
                    {collection.title}
                  </h2>
                  
                  <p className="text-gray-600">
                    {collection.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {collection.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg 
                          className="h-5 w-5 text-fashion-700 mt-1 mr-3 flex-shrink-0" 
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
                  
                  <div>
                    <a 
                      href={`https://banisaad.myshopify.com/collections/${collection.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-md transition-all duration-300 hover:bg-primary/90"
                    >
                      Shop This Collection
                      <ShoppingBag className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <div 
                  className={`relative animate-on-scroll ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="absolute inset-0 bg-fashion-50 rounded-2xl transform rotate-2 -z-10"></div>
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src={collection.image} 
                      alt={collection.title} 
                      className="w-full h-auto object-cover aspect-[4/3]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Custom Orders */}
        <section className="section-padding bg-fashion-700 text-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold animate-on-scroll">
                Custom Designs Available
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto animate-on-scroll">
                Looking for something uniquely yours? Our artisans can create custom pieces 
                that honor your personal story while maintaining our commitment to heritage 
                and empowerment.
              </p>
              <div className="animate-on-scroll">
                <a 
                  href="mailto:custom@banisaad.com"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-fashion-700 font-medium rounded-md transition-all duration-300 hover:bg-gray-100"
                >
                  Inquire About Custom Orders
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

export default Collections;
