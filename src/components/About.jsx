import { ArrowUpRight, Eye, HeartHandshake, Lightbulb, ShieldCheck, Sparkles, Zap } from 'lucide-react';

const values = [
  { icon: <Sparkles size={18} />, title: 'Excellence', text: 'Quality, safety, and finishing are part of every job.' },
  { icon: <Lightbulb size={18} />, title: 'Innovation', text: 'We bring practical technology into everyday work.' },
  { icon: <HeartHandshake size={18} />, title: 'Trust & integrity', text: 'We work with honesty, care, and clear communication.' },
  { icon: <Zap size={18} />, title: 'Agility', text: 'We respond quickly and solve problems thoughtfully.' },
];

export default function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="section-label"><span className="eyebrow">A HYBRID TECH-ENGINEERING ECOSYSTEM</span><span className="section-index">01 / ABOUT VCL</span></div>
      <div className="about-intro">
        <div>
          <h2>Modern service.<br /><em>Human expertise.</em></h2>
          <a className="text-link" href="#contact">Work with VersaCraft <ArrowUpRight size={16} /></a>
        </div>
        <div className="about-story">
          <p>VersaCraft Limited began with a clear purpose: to bridge traditional service delivery and modern technology. We bring hands-on engineering together with digital innovation so homes and businesses can get dependable support in one place.</p>
          <p>From electrical engineering and facility care to software, AI, and digital branding, our teams work to make everyday services smarter, safer, and more reliable.</p>
        </div>
      </div>
      <div className="vision-mission">
        <article><span className="small-icon"><Eye size={18} /></span><div><h3>Our vision</h3><p>Set global standards in technology, engineering, and innovative services—and become the long-term partner our clients trust.</p></div></article>
        <article><span className="small-icon"><ShieldCheck size={18} /></span><div><h3>Our mission</h3><p>Deliver quality solutions with certified expertise, useful technology, transparency, and dedicated customer support.</p></div></article>
      </div>
      <div className="values-grid" aria-label="Our core values">
        {values.map((value) => <article className="value-card" key={value.title}><span className="value-icon">{value.icon}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}
      </div>
    </section>
  );
}
