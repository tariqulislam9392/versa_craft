import { ArrowDown, ArrowUpRight } from 'lucide-react';
import WorldMap from './WorldMap';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <span className="eyebrow"><span className="eyebrow-dot" /> MADE IN BANGLADESH · MADE FOR EVERYWHERE</span>
        <h1>Good things<br />come <em>together.</em></h1>
        <p>We bring thoughtful products and trusted people together to create work that moves your business forward.</p>
        <div className="hero-actions"><a className="button-primary" href="#services">Explore what we do <ArrowUpRight size={17} /></a><a className="text-link" href="#about">Get to know us <ArrowDown size={15} /></a></div>
      </div>
      <WorldMap />
      <div className="hero-foot"><span>01 / A WORLD OF POSSIBILITIES</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>
  );
}
