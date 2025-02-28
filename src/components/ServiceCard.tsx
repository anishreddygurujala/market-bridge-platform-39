
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover animate-on-scroll">
      <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-50 text-gray-900 group-hover:bg-black group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="pt-2">
        <span className="inline-flex items-center text-sm font-medium text-gray-900 group-hover:text-black">
          Learn more
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
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
