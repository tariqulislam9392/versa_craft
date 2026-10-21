import { Building2, ChartNoAxesCombined, Headset, House, MonitorCog, Network, ShieldCheck } from 'lucide-react';

const pillars = [
  { icon: <House size={22} />, number: '01', title: 'Home & facility services', text: 'Premium lifestyle and facility maintenance for residential and commercial spaces.' },
  { icon: <Network size={22} />, number: '02', title: 'Engineering & technology', text: 'Electrical, network, power, and smart security systems built for dependable operations.' },
  { icon: <MonitorCog size={22} />, number: '03', title: 'Digital & tech solutions', text: 'Custom software, web platforms, AI integration, and creative digital services.' },
  { icon: <ShieldCheck size={22} />, number: '04', title: 'Quality & customer success', text: 'Field audits, technician training, and responsive customer support.' },
  { icon: <ChartNoAxesCombined size={22} />, number: '05', title: 'Business development', text: 'Strategic B2B delivery and long-term corporate partnerships.' },
  { icon: <Building2 size={22} />, number: '06', title: 'Corporate affairs', text: 'People, governance, and financial planning that keep the business moving.' },
];

export default function Pillars() {
  return (
    <section className="pillars section-pad" id="pillars">
      <div className="section-heading">
        <div><span className="eyebrow">ONE CONNECTED TEAM</span><h2>Our core<br /><em>pillars.</em></h2></div>
        <p>Different expertise, working together as one reliable partner for homes, businesses, and industry.</p>
      </div>
      <div className="pillar-grid">
        {pillars.map((pillar) => <article className="pillar-card" key={pillar.number}><div className="pillar-card-top"><span>{pillar.number}</span><span className="pillar-icon">{pillar.icon}</span></div><h3>{pillar.title}</h3><p>{pillar.text}</p></article>)}
      </div>
      <div className="support-strip"><Headset size={19} /><p><b>Support that stays with you.</b> Dedicated follow-through, maintenance, and 24/7 customer support.</p><a href="#contact">Talk to our team <span>↗</span></a></div>
    </section>
  );
}
