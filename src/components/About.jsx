import { ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="about-kicker"><span className="eyebrow">A LITTLE ABOUT US</span><span className="about-number">VCL · EST. WITH PURPOSE</span></div>
      <div className="about-content"><h2>About <em>VCL</em></h2><div><p>Versa Craft Limited is built on a simple idea: the best work happens when people, craft, and purpose come together.</p><p>Rooted in Bangladesh and connected to the world, we work alongside our partners to turn good ideas into products people can feel good about.</p><a className="text-link" href="#contact">Let’s make something good <ArrowUpRight size={16} /></a></div></div>
    </section>
  );
}
