import logo from '../assets/vcl-logo.png';
import { ArrowUpRight } from 'lucide-react';

function SocialIcon({ name }) {
  const props = { viewBox: '0 0 24 24', width: 17, height: 17, 'aria-hidden': true };
  if (name === 'Facebook') return <svg {...props} fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V10H7v3h2.8v8z" /></svg>;
  if (name === 'Instagram') return <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="18" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg>;
  if (name === 'LinkedIn') return <svg {...props} fill="currentColor"><path d="M5.2 8.6H2.1V22h3.1V8.6ZM3.7 2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM22 14.3c0-4-2.1-5.9-4.9-5.9a4.2 4.2 0 0 0-3.8 2.1V8.6h-3V22h3.1v-6.6c0-1.7.3-3.4 2.5-3.4s2.2 2 2.2 3.5V22H22v-7.7Z" /></svg>;
  return <svg {...props} fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" /></svg>;
}

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/versacraftlimited' },
  { name: 'Facebook', href: 'https://www.facebook.com/VersaCraftLimited' },
  { name: 'Instagram', href: 'https://www.instagram.com/VersaCraftLimited' },
  { name: 'YouTube', href: 'https://www.youtube.com/@VersaCraftLimited' },
];

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="contact-section section-pad">
        <div className="contact-copy"><span className="eyebrow">LET'S BUILD THE FUTURE, TOGETHER</span><h2>Have a project<br />in <em>mind?</em></h2><p>Tell us what you need. Our team will help you find the right people and the right next step.</p><a className="button-primary" href="mailto:info@versacraft.co">Start a conversation <ArrowUpRight size={17} /></a></div>
        <div className="contact-details">
          <a className="contact-item" href="https://maps.google.com/?q=Rakhi+Tower,+Arichpur+Road,+Tongi,+Gazipur,+Dhaka,+Bangladesh" target="_blank" rel="noreferrer"><span>01 / HOME OFFICE</span><b>Rakhi Tower, Arichpur Road,<br />Tongi, Gazipur, Dhaka, Bangladesh</b><ArrowUpRight size={15} /></a>
          <a className="contact-item" href="tel:+8801818848850"><span>02 / CALL OUR TEAM</span><b>+88 01818 848850</b><ArrowUpRight size={15} /></a>
          <a className="contact-item" href="mailto:info@versacraft.co"><span>03 / EMAIL US</span><b>info@versacraft.co</b><ArrowUpRight size={15} /></a>
          <a className="contact-item" href="mailto:support@versacraft.co"><span>04 / CORPORATE SUPPORT</span><b>support@versacraft.co</b><ArrowUpRight size={15} /></a>
          <p className="contact-note">Dedicated on-call technical support is available for corporate clients.</p>
        </div>
      </div>
      <div className="footer-main">
          <div className="footer-brand-column"><a className="footer-logo" href="#home"><img src={logo} alt="VersaCraft Limited" /></a><p>A hybrid tech-engineering ecosystem.<br />Rooted in Bangladesh, ready for what&apos;s next.</p><div className="footer-socials"><span>CONNECT WITH US</span><div>{socialLinks.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noreferrer" aria-label={`VersaCraft on ${social.name}`}><SocialIcon name={social.name} /></a>)}</div></div></div>
        <div className="footer-group"><h3>About VCL</h3><a href="#about">Our story</a><a href="#pillars">Core pillars</a><a href="#approach">How we work</a><a href="#compliance">Safety &amp; compliance</a></div>
        <div className="footer-group"><h3>Resources</h3><a href="mailto:info@versacraft.co">Contact us</a><a href="mailto:support@versacraft.co">Corporate support</a><a href="#industries">Industries</a><a href="#partners">Our partners</a></div>
        <div className="footer-group"><h3>Our services</h3><a href="#services">Home &amp; facility care</a><a href="#services">Engineering &amp; automation</a><a href="#services">Technology, software &amp; AI</a><a href="#services">Digital &amp; corporate services</a></div>
      </div>
      <div className="footer-bottom"><small>© {new Date().getFullYear()} VersaCraft Limited · Prepared by VersaRoots Holdings</small><a href="#home">Back to top ↑</a></div>
    </footer>
  );
}
