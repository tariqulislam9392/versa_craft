import { ArrowUpRight, Network } from 'lucide-react';
import { services } from './serviceCatalog';

export default function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="section-heading">
        <div><span className="eyebrow">WHAT WE DO</span><h2>One partner.<br /><em>Every solution.</em></h2></div>
        <p>From a home service visit to complex engineering and digital projects, our teams bring the right expertise together.</p>
      </div>
      <div className="service-grid">
        {services.map((service) => <article className="service-card" key={service.number}>
          <div className="card-top"><span>{service.number} / SERVICE</span><span className="service-icon">{service.icon}</span></div>
          <h3>{service.title}</h3><p>{service.summary}</p>
          <ul>{service.items.map((item) => <li key={item}><span />{item}</li>)}</ul>
          <a href="#contact" aria-label={`Ask VersaCraft about ${service.title}`}><ArrowUpRight size={18} /></a>
        </article>)}
      </div>
      <div className="service-note"><Network size={17} /><span>Need more than one service? We coordinate across teams, so your project works together from the start.</span><a href="#contact">Plan a project <ArrowUpRight size={14} /></a></div>
    </section>
  );
}
