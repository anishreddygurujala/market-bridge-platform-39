
import { useEffect } from 'react';
import { Heart, Sparkles, Leaf, Globe } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
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

  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Women Empowerment",
      description: "We provide women artisans with tools and resources to craft their dreams and achieve economic independence."
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Cultural Heritage",
      description: "We honor the rich cultural traditions of the Bani Saad tribe by incorporating tribal elements into contemporary designs."
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Sustainability",
      description: "Our commitment to ethical sourcing and sustainable practices ensures respect for our planet and its resources."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Community",
      description: "We create a worldwide network of women who celebrate their heritage and support each other's growth."
    }
  ];

  const team = [
    {
      name: "Fatima Al-Saad",
      position: "Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Amira Hassan",
      position: "Head of Design",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Layla Mahmoud",
      position: "Artisan Coordinator",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Nadia Ali",
      position: "Sustainability Officer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop"
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
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold animate-on-scroll">
                Our Story & Vision
              </h1>
              <p className="text-gray-600 text-lg md:text-xl animate-on-scroll">
                We are a movement that redefines the intersection of heritage and modernity through 
                exquisite fashion and timeless jewelry.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative animate-on-scroll">
                <div className="absolute inset-0 bg-fashion-100 rounded-2xl transform -rotate-2 -z-10"></div>
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop" 
                    alt="Traditional artisan craftsmanship" 
                    className="w-full h-auto object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div className="space-y-6 animate-on-scroll">
                <span className="inline-block font-medium text-sm px-3 py-1 bg-fashion-100 text-fashion-700 rounded-full">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  A Legacy of Empowerment
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Bani Saad was born from a vision to honor the rich heritage of our ancestral tribe 
                    while creating pathways for women to achieve economic independence through artistry 
                    and craftsmanship.
                  </p>
                  <p>
                    Inspired by the intricate designs and symbolic elements of our cultural heritage, 
                    our founder Fatima Al-Saad began working with women artisans from her community to 
                    create jewelry and fashion pieces that told stories of resilience and beauty.
                  </p>
                  <p>
                    What started as a small collective of women creating pieces to preserve their cultural 
                    traditions has grown into a global brand that celebrates the intersection of heritage 
                    and contemporary design, all while maintaining our core mission of empowerment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission Section */}
        <section className="section-padding bg-fashion-700 text-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="inline-block font-medium text-sm px-3 py-1 bg-white text-fashion-700 rounded-full animate-on-scroll">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 animate-on-scroll">
                Empowerment Through Elegance
              </h2>
              <div className="space-y-6 animate-on-scroll">
                <p className="text-white/80 text-lg">
                  At Bani Saad, we believe that when women thrive, communities flourish. Our commitment to 
                  elegance extends beyond aesthetics; it is woven into the very fabric of our purpose.
                </p>
                <p className="text-white/80 text-lg">
                  By providing women artisans with the tools and resources to craft their dreams, we ignite 
                  a renaissance of creativity and economic independence that resonates far and wide.
                </p>
                <p className="text-white/80 text-lg">
                  As the proud descendants of a lineage dedicated to uplifting communities, we honor our 
                  heritage by championing sustainable practices and ethical craftsmanship. Our collections are 
                  more than mere adornments; they are symbols of strength, resilience, and the enduring spirit 
                  of women who shape the world.
                </p>
              </div>
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
                What Guides Us
              </h2>
              <p className="text-gray-600 animate-on-scroll">
                Our core values shape everything we do, from the designs we create to the 
                relationships we build with our artisans and customers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 stagger-animation">
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
        
        {/* Our Team Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
              <span className="inline-block font-medium text-sm px-3 py-1 bg-fashion-100 text-fashion-700 rounded-full animate-on-scroll">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-4 animate-on-scroll">
                The Women Behind Bani Saad
              </h2>
              <p className="text-gray-600 animate-on-scroll">
                Meet the passionate women who lead our mission to blend heritage with modern fashion 
                and empower communities through art and craftsmanship.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 stagger-animation">
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-fashion-100 animate-on-scroll card-hover"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-display font-semibold">{member.name}</h3>
                    <p className="text-gray-600">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Impact Section */}
        <section className="section-padding bg-fashion-800 text-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold animate-on-scroll">
                Our Impact
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto animate-on-scroll">
                Together, we are not just building a brand; we are crafting a legacy of elegance and 
                purpose that transcends borders and inspires generations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 stagger-animation">
                <div className="animate-on-scroll">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center h-full">
                    <span className="block text-4xl font-display font-bold text-white mb-2">150+</span>
                    <span className="text-white/80">Women Artisans Employed</span>
                  </div>
                </div>
                <div className="animate-on-scroll">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center h-full">
                    <span className="block text-4xl font-display font-bold text-white mb-2">12</span>
                    <span className="text-white/80">Communities Supported</span>
                  </div>
                </div>
                <div className="animate-on-scroll">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center h-full">
                    <span className="block text-4xl font-display font-bold text-white mb-2">85%</span>
                    <span className="text-white/80">Sustainable Materials</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
