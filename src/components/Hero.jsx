import { ArrowDown, ArrowUpRight, BadgeCheck, Clock3, Sparkles } from 'lucide-react';
import logoSymbol from '../assets/vcl-symbol-clean.png';

export default function Hero() {
  return (
    <section className="hero brand-frame" id="home">
      <div className="hero-copy">
        <span className="eyebrow"><span className="eyebrow-dot" /> VERSACRAFT LIMITED · BANGLADESH</span>
        <h1>VersaCraft<span className="title-period">.</span></h1>
        <p className="hero-subtitle">Multifaceted services &amp; expertise</p>
        <p className="hero-description">A hybrid tech-engineering ecosystem bringing skilled people, practical engineering, and modern technology together.</p>
        <div className="hero-actions">
          <a className="button-primary" href="#services">Explore our services <ArrowUpRight size={17} /></a>
          <a className="text-link" href="#about">Meet VersaCraft <ArrowDown size={15} /></a>
        </div>
        <div className="hero-prepared"><span>PREPARED BY</span><b>VersaRoots Holdings</b></div>
      </div>
      <div className="hero-art" aria-label="VersaCraft Limited brand illustration">
        <img className="hero-art-watermark" src={logoSymbol} alt="" />
        <div className="hero-art-logo"><span>VersaCraft</span></div>
        <div className="hero-art-orbit hero-art-orbit-one" />
        <div className="hero-art-orbit hero-art-orbit-two" />
        <div className="hero-art-core"><Sparkles size={34} strokeWidth={1.3} /><span>Built around<br />what matters</span></div>
        <div className="hero-art-note"><BadgeCheck size={17} /><span>One trusted partner<br />across every need</span></div>
        <div className="hero-art-note hero-art-note-bottom"><Clock3 size={17} /><span>Reliable support<br />when it matters</span></div>
      </div>
      <div className="hero-foot"><span>01 / ENGINEERING · TECHNOLOGY · SERVICE</span><a href="#about">SCROLL TO EXPLORE <ArrowDown size={12} /></a></div>
    </section>
  );
}
