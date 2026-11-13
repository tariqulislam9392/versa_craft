import { ArrowUpRight } from 'lucide-react';
import { services } from './serviceCatalog';

export default function ServicesPage() {
  return (
    <main className="services-page">
      <header className="services-page-intro">
        <span className="eyebrow">OUR SERVICES</span>
        <h1>Solutions for every<br /><em>part of your business.</em></h1>
        <p>Explore the teams and capabilities VersaCraft brings together for homes, businesses, and industry.</p>
        <a className="services-page-cta" href="#contact">Talk to our team <ArrowUpRight size={17} /></a>
      </header>

      <section className="services-catalog" id="services" aria-label="All VersaCraft services">
        {services.map((service) => (
          <article className="service-detail-card" key={service.number}>
            <div className="service-detail-top">
              <span>{service.number} / SERVICE</span>
              <span className="service-detail-icon">{service.icon}</span>
            </div>
            <h2>{service.title}</h2>
            <p>{service.summary}</p>
            <ul className="service-detail-list">
              {service.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <a href="#contact" aria-label={`Ask VersaCraft about ${service.title}`}>
              Discuss this service <ArrowUpRight size={15} />
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
