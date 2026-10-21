import { ArrowDownRight, BadgeCheck, ClipboardList, FileCheck2, Handshake, Search, ShieldCheck, Sparkles, Wrench } from 'lucide-react';

const advantages = [
  { icon: <Handshake size={18} />, title: 'One-stop hybrid ecosystem', text: 'Engineering, facility care, software, and digital branding under one roof.' },
  { icon: <BadgeCheck size={18} />, title: 'Proven expertise', text: 'Certified engineers, tech innovators, and experienced field professionals.' },
  { icon: <Sparkles size={18} />, title: 'Tech-driven precision', text: 'Useful AI and modern automation that improve speed and accuracy.' },
  { icon: <ShieldCheck size={18} />, title: 'Quality you can check', text: 'Field audits and quality controls at every important step.' },
  { icon: <FileCheck2 size={18} />, title: 'Clear scope & budget', text: 'A tailored proposal with scope, cost, and timeline set out up front.' },
  { icon: <Wrench size={18} />, title: 'Support after delivery', text: 'Maintenance, AMC, and technical assistance to keep operations running.' },
];

const steps = [
  { icon: <Search size={17} />, title: 'Discover', text: 'We listen, assess the site or system, and understand your goals.' },
  { icon: <ClipboardList size={17} />, title: 'Plan', text: 'We recommend a practical scope, transparent budget, and timeline.' },
  { icon: <Wrench size={17} />, title: 'Deliver', text: 'The right team completes the work with safety and quality checks.' },
  { icon: <ArrowDownRight size={17} />, title: 'Support', text: 'We hand over clearly and stay available for ongoing care.' },
];

export default function Approach() {
  return (
    <section className="approach section-pad" id="approach">
      <div className="section-heading">
        <div><span className="eyebrow">THE VERSACRAFT ADVANTAGE</span><h2>Good work, built<br /><em>on trust.</em></h2></div>
        <p>Dependable people, thoughtful technology, and a process you can follow at every step.</p>
      </div>
      <div className="approach-layout">
        <div className="advantage-grid">{advantages.map((item) => <article className="advantage-item" key={item.title}><span className="advantage-icon">{item.icon}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
        <aside className="process-panel">
          <span className="eyebrow">HOW WE WORK</span>
          <h3>A clear path<br />from idea to done.</h3>
          <div className="process-list">{steps.map((step, index) => <article className="process-step" key={step.title}><span className="process-number">0{index + 1}</span><span className="process-icon">{step.icon}</span><div><h4>{step.title}</h4><p>{step.text}</p></div></article>)}</div>
        </aside>
      </div>
      <div className="compliance-band" id="compliance">
        <div className="compliance-heading"><ShieldCheck size={23} /><div><b>Safety, security &amp; compliance come first.</b><p>We protect people, projects, and information with care at every stage.</p></div></div>
        <div className="compliance-points">
          <article><span>01 / EHS</span><p>On-site safety practices and a zero-accident mindset.</p></article>
          <article><span>02 / CYBERSECURITY</span><p>Secure infrastructure and data protection for digital services.</p></article>
          <article><span>03 / QUALITY</span><p>Multi-layer audits aligned with relevant codes and standards.</p></article>
        </div>
      </div>
    </section>
  );
}
