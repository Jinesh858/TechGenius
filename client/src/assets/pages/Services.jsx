import React from 'react';
import './Services.css';
import { useAuth } from '../store/Auth';

export const Services = () => {
  const { services } = useAuth();

  return (
    
    <section className='section-services'>
      <h1 className="main-heading">Our Services</h1>
      <div className="container">
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-image">
                <img src={`/images/service${index + 1}.png`} alt={`service-${index}`} />
              </div>
              <div className="service-details">
                <div className="provider-price">
                  <p>{service.provider}</p>
                  <p>Price:-₹{service.price}</p>
                </div>
                <div className="service-info">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
