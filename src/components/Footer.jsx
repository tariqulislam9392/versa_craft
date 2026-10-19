import { ArrowUpRight } from 'lucide-react';

function SocialIcon({ name }) {
  const common = { viewBox: '0 0 24 24', width: 17, height: 17, fill: 'currentColor', 'aria-hidden': true };
  if (name === 'Facebook') return <svg {...common}><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V10H7v3h2.8v8z" /></svg>;
  if (name === 'Instagram') return <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="18" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg>;
  if (name === 'LinkedIn') return <svg {...common}><path d="M5.2 8.6H2.1V22h3.1V8.6ZM3.7 2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM22 14.3c0-4-2.1-5.9-4.9-5.9a4.2 4.2 0 0 0-3.8 2.1V8.6h-3V22h3.1v-6.6c0-1.7.3-3.4 2.5-3.4s2.2 2 2.2 3.5V22H22v-7.7Z" /></svg>;
  if (name === 'YouTube') return <svg {...common}><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" /></svg>;
  return <svg {...common}><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.8 5.7 22H2.5l7.3-8.4L1 2h6.5l4.4 6.6L18.9 2Zm-1.1 18h1.7L6.5 3.9H4.7L17.8 20Z" /></svg>;
}

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/' },
  { name: 'Instagram', href: 'https://www.instagram.com/' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { name: 'YouTube', href: 'https://www.youtube.com/' },
  { name: 'X / Twitter', href: 'https://x.com/' },
];

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand-column">
          <a className="brand footer-brand" href="#home"><span className="brand-mark">V</span><span className="brand-name">VERSA CRAFT<small>LIMITED</small></span></a>
          <p>Good things come together.<br />Rooted in Bangladesh, connected to the world.</p>
          <div className="footer-socials" aria-label="Social media"><span>FOLLOW US</span><div>{socialLinks.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noreferrer" aria-label={`Visit ${social.name}`}><SocialIcon name={social.name === 'X / Twitter' ? 'X' : social.name} /></a>)}</div></div>
        </div>
        <div className="footer-group"><h3>About VLC</h3><a href="#about">Company profile</a><a href="#about">Investors</a><a href="#about">Press</a><a href="#about">Legal information</a></div>
        <div className="footer-group"><h3>Resources</h3><a href="mailto:hello@versacraftlimited.com">Contact us</a><a href="#services">Service compliance</a><a href="#services">Service recall</a><a href="mailto:hello@versacraftlimited.com">Support</a></div>
        <div className="footer-group"><h3>Our services</h3><a href="#services">Product development</a><a href="#services">Responsible sourcing</a><a href="#services">Quality &amp; delivery</a><a href="#services">All services <ArrowUpRight size={13} /></a></div>
      </div>
      <div className="footer-bottom"><small>© {new Date().getFullYear()} Versa Craft Limited</small><a href="mailto:hello@versacraftlimited.com">Get in touch <ArrowUpRight size={14} /></a><a href="#home">Back to top ↑</a></div>
    </footer>
  );
}
