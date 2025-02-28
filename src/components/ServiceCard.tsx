
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  imageUrl?: string;
}

const ServiceCard = ({ icon, title, description, imageUrl }: ServiceCardProps) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 card-hover animate-on-scroll">
      {imageUrl && (
        <div className="aspect-[3/2] overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-full bg-fashion-50 text-fashion-700 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="pt-2">
          <a 
            href="https://banisaad.myshopify.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary group-hover:text-fashion-800"
          >
            Explore Collection
            <svg
              className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
