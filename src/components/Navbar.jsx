import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import logo from '../assets/vcl-symbol-transparent.png';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Partners', href: '#partners' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="VersaCraft Limited home">
          <span className="brand-mark"><img src={logo} alt="" /></span>
          <span className="brand-name">VersaCraft <small>Limited</small></span>
        </a>
        <div className={`nav-links${open ? ' nav-links-open' : ''}`}>
          {links.map((link) => <a key={link.label} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
          <a className="mobile-login" href="#contact" onClick={() => setOpen(false)}>Let&apos;s talk <ArrowUpRight size={16} /></a>
        </div>
        <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={16} /></a>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
    </header>
  );
}
