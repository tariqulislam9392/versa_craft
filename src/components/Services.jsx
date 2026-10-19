import { ArrowUpRight, Boxes, PackageCheck, Sparkles } from 'lucide-react';

const services = [
  { number: '01', icon: <Sparkles size={21} />, title: 'Product development', text: 'From the first sketch to a market-ready product, we help shape ideas with care.' },
  { number: '02', icon: <Boxes size={21} />, title: 'Responsible sourcing', text: 'Thoughtful materials and trusted partners, selected to meet your needs.' },
  { number: '03', icon: <PackageCheck size={21} />, title: 'Quality & delivery', text: 'Reliable quality checks and considered coordination at every step.' },
];

export default function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="section-heading"><div><span className="eyebrow">WHAT WE BRING TO THE TABLE</span><h2>From first thought<br />to <em>final delivery.</em></h2></div><p>One thoughtful team, all the details taken care of. Here’s how we help you make it happen.</p></div>
      <div className="service-grid" id="products">
        {services.map((service) => <article className="service-card" key={service.number}><div className="card-top"><span>{service.number}</span><span className="service-icon">{service.icon}</span></div><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" aria-label={`Learn about ${service.title}`}><ArrowUpRight size={19} /></a></article>)}
      </div>
    </section>
  );
}
