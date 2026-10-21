import { ArrowUpRight, Building2, Cpu, Hammer, Megaphone, Network, Zap } from 'lucide-react';

const services = [
  {
    number: '01', icon: <Hammer size={21} />, title: 'Home & facility care',
    summary: 'Modern maintenance and premium lifestyle solutions for homes and workplaces.',
    items: ['HVAC & AC installation, repair, and AMC', 'Plumbing, sanitary, and leak detection', 'Custom woodcraft and interior care', 'Architectural painting and finishing'],
  },
  {
    number: '02', icon: <Zap size={21} />, title: 'Engineering & automation',
    summary: 'Robust engineering solutions for commercial and industrial operations.',
    items: ['Substation, transformer, and power setup', 'High-voltage wiring and panel assembly', 'CCTV, access control, and fire safety'],
  },
  {
    number: '03', icon: <Cpu size={21} />, title: 'Technology, software & AI',
    summary: 'Custom platforms, IT infrastructure, and smart automation for business growth.',
    items: ['Websites, portals, and e-commerce', 'Mobile apps and custom ERP / CRM', 'Network, server, and cloud infrastructure', 'AI integration and process automation'],
  },
  {
    number: '04', icon: <Megaphone size={21} />, title: 'Digital & creative studio',
    summary: 'Data-driven marketing and compelling creative work to grow your brand.',
    items: ['Performance marketing and SEO', 'Brand identity and UI / UX design', 'Video, animation, and social content'],
  },
  {
    number: '05', icon: <Building2 size={21} />, title: 'Corporate & B2B',
    summary: 'Integrated service packages and responsive support for institutional clients.',
    items: ['Facility management and annual maintenance', 'Dedicated technical support and project managers'],
  },
];

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
