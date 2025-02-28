
import { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Location",
      details: [
        "123 Business Avenue, Suite 101",
        "Riyadh, Saudi Arabia"
      ]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Number",
      details: [
        "+966 12 345 6789",
        "+966 98 765 4321"
      ]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Address",
      details: [
        "info@banisaad.com",
        "support@banisaad.com"
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9am - 6pm",
        "Saturday: 10am - 4pm"
      ]
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
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold animate-on-scroll">
                Get in Touch
              </h1>
              <p className="text-gray-600 text-lg md:text-xl animate-on-scroll">
                Have a question or ready to start your project? We're here to help.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-xl p-6 text-center animate-on-scroll"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <div className="space-y-1">
                    {item.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-on-scroll">
                <span className="inline-block font-medium text-sm px-3 py-1 bg-gray-100 text-gray-800 rounded-full">
                  Send Us a Message
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  Let's Discuss Your Project
                </h2>
                <p className="text-gray-600">
                  Fill out the form and our team will get back to you within 24 hours. 
                  We're excited to learn about your business and how we can help you achieve your goals.
                </p>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold mb-3">What happens next?</h3>
                  <ol className="space-y-4">
                    <li className="flex">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-sm mr-3 flex-shrink-0">
                        1
                      </span>
                      <span className="text-gray-600">
                        We'll contact you for a brief discovery call to understand your needs.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-sm mr-3 flex-shrink-0">
                        2
                      </span>
                      <span className="text-gray-600">
                        Our team will prepare a proposal tailored to your project.
                      </span>
                    </li>
                    <li className="flex">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-sm mr-3 flex-shrink-0">
                        3
                      </span>
                      <span className="text-gray-600">
                        We'll schedule a detailed discussion to finalize the project scope.
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="animate-on-scroll rounded-xl overflow-hidden shadow-sm border border-gray-100 h-[400px]">
              {/* Note: In a real implementation, you would add a Google Maps embed or similar here */}
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Map would be embedded here</p>
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

export default Contact;
