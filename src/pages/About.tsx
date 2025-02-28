
import { useEffect } from 'react';
import { Users, Award, Clock, Target } from 'lucide-react';
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
      icon: <Users className="h-6 w-6" />,
      title: "Client-Focused",
      description: "We prioritize your business goals and deliver solutions tailored to your specific needs."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "We strive for excellence in every project, ensuring the highest quality in our deliverables."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Timeliness",
      description: "We respect deadlines and work efficiently to deliver projects on schedule."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Results-Driven",
      description: "Our strategies are designed to achieve measurable outcomes for your business."
    }
  ];

  const team = [
    {
      name: "Ahmed Saad",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Sara Ali",
      position: "Marketing Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Mohammed Khalid",
      position: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Layla Hassan",
      position: "SEO Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
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
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold animate-on-scroll">
                We're a Digital Agency with a Vision
              </h1>
              <p className="text-gray-600 text-lg md:text-xl animate-on-scroll">
                Dedicated to helping businesses establish and grow their digital presence
                through innovative marketing and web development solutions.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative animate-on-scroll">
                <div className="absolute inset-0 bg-gray-100 rounded-2xl transform -rotate-2 -z-10"></div>
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="Our Story" 
                    className="w-full h-auto object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div className="space-y-6 animate-on-scroll">
                <span className="inline-block font-medium text-sm px-3 py-1 bg-gray-100 text-gray-800 rounded-full">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  From Humble Beginnings to Digital Excellence
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2015, Bani Saad began as a small website development firm with a passion
                    for creating beautiful and functional digital experiences. As the digital landscape
                    evolved, so did we, expanding our services to include comprehensive digital marketing
                    solutions.
                  </p>
                  <p>
                    Today, we're proud to be a full-service digital agency helping businesses of all
                    sizes establish and grow their online presence. Our team of experts combines
                    technical skill with creative innovation to deliver solutions that drive results.
                  </p>
                  <p>
                    What sets us apart is our personalized approach to each project. We believe in
                    building lasting relationships with our clients, understanding their unique challenges,
                    and developing customized strategies that align with their business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto">
            <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
              <span className="inline-block font-medium text-sm px-3 py-1 bg-gray-100 text-gray-800 rounded-full animate-on-scroll">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-4 animate-on-scroll">
                Principles That Guide Us
              </h2>
              <p className="text-gray-600 animate-on-scroll">
                At Bani Saad, our work is guided by core values that ensure we deliver
                exceptional service and results for our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 stagger-animation">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-on-scroll card-hover"
                >
                  <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-50 text-gray-900">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
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
              <span className="inline-block font-medium text-sm px-3 py-1 bg-gray-100 text-gray-800 rounded-full animate-on-scroll">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-4 animate-on-scroll">
                Meet the Experts
              </h2>
              <p className="text-gray-600 animate-on-scroll">
                Our talented team of professionals combines creativity, technical expertise,
                and industry knowledge to deliver exceptional results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 stagger-animation">
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 animate-on-scroll card-hover"
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
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-gray-600">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Expertise Section */}
        <section className="section-padding bg-gray-900 text-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold animate-on-scroll">
                Our Expertise
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto animate-on-scroll">
                With years of experience in the digital landscape, we've honed our skills
                to provide the highest quality services for our clients.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 stagger-animation">
                {[
                  "Web Development",
                  "E-commerce",
                  "SEO",
                  "Content Marketing",
                  "PPC Advertising",
                  "Social Media",
                  "Analytics",
                  "Brand Strategy"
                ].map((skill, index) => (
                  <div key={index} className="animate-on-scroll">
                    <div className="bg-white/10 rounded-lg px-4 py-6 text-center backdrop-blur-sm">
                      <span className="text-white font-medium">{skill}</span>
                    </div>
                  </div>
                ))}
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
