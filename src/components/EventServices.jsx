import React from 'react';
import ServiceCard from './EventServicesCard';
import imges from '../assets/imgs/group.png';
import imges2 from '../assets/imgs/kabab.png';



const servicesData = [
  {
    image:`${imges2}`,
    title: "Caterings",
    description: "In the new era of technology we look in the future with certainty for life.",
  },
  {
    image:`${imges}`,
    title: "Weddings",
    description: "In the new era of technology we look in the future with certainty for life.",
  },
  {
    image:`${imges2}`,
    title: "Events",
    description: "In the new era of technology we look in the future with certainty for life.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-serif text-gray-800 mb-16 max-w-2xl mx-auto leading-tight">
          We also offer unique services for your events
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;