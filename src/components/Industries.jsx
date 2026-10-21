import { Building2, Factory, HeartPulse, Home, ShoppingBag } from 'lucide-react';

const sectors = [
  { icon: <Building2 size={22} />, title: 'Corporate & financial', text: 'Integrated facility management, secure IT infrastructure, and smart security for offices and banks.' },
  { icon: <Factory size={22} />, title: 'Manufacturing & industry', text: 'Power systems, high-voltage engineering, automation, and operational support.' },
  { icon: <Home size={22} />, title: 'Real estate & residential', text: 'HVAC, smart home automation, and dependable property care.' },
  { icon: <HeartPulse size={22} />, title: 'Healthcare & education', text: 'Climate control, reliable power, and hygiene-focused facility services.' },
  { icon: <ShoppingBag size={22} />, title: 'Retail, hospitality & e-commerce', text: 'Digital platforms, marketing, AI tools, and responsive technical support.' },
];

export default function Industries() {
  return (
    <section className="industries section-pad" id="industries">
      <div className="section-heading">
        <div><span className="eyebrow">SECTORS WE SUPPORT</span><h2>Built for the way<br /><em>business works.</em></h2></div>
        <p>Scalable solutions shaped around each sector, its people, and the work that keeps it moving.</p>
      </div>
      <div className="industry-grid">
        {sectors.map((sector, index) => <article className="industry-card" key={sector.title}><div className="industry-card-top"><span>0{index + 1}</span><span>{sector.icon}</span></div><h3>{sector.title}</h3><p>{sector.text}</p></article>)}
      </div>
    </section>
  );
}
