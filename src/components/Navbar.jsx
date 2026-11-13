import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Building2, ChevronDown, Cpu, Hammer, Menu, Megaphone, X, Zap } from 'lucide-react';
import logo from '../assets/vcl-symbol-transparent.png';

const serviceCategories = [
  {
    title: 'Home & Facility Care', icon: <Hammer size={19} />,
    groups: [
      { title: 'Home Maintenance', items: ['HVAC & AC installation and repair', 'Plumbing & sanitary solutions', 'Electrical repair and maintenance', 'Painting & interior finishing'] },
      { title: 'Facility Services', items: ['Facility management', 'Annual maintenance contracts', 'Workplace upkeep & inspections'] },
      { title: 'Custom Craft', items: ['Custom woodcraft', 'Interior care', 'Residential support'] },
    ],
  },
  {
    title: 'Engineering & Automation', icon: <Zap size={19} />,
    groups: [
      { title: 'Power & Electrical', items: ['Substation & transformer setup', 'High-voltage wiring', 'Panel assembly'] },
      { title: 'Safety & Security', items: ['CCTV systems', 'Access control', 'Fire detection & safety'] },
      { title: 'Industrial Solutions', items: ['Engineering design', 'Automation systems', 'Technical project support'] },
    ],
  },
  {
    title: 'Technology, Software & AI', icon: <Cpu size={19} />,
    groups: [
      { title: 'Software & Platforms', items: ['Websites, portals & e-commerce', 'Mobile applications', 'Custom ERP & CRM'] },
      { title: 'IT Infrastructure', items: ['Network & server setup', 'Cloud infrastructure', 'IT support & maintenance'] },
      { title: 'AI & Automation', items: ['AI integration', 'Workflow automation', 'Smart business tools'] },
    ],
  },
  {
    title: 'Digital & Creative Studio', icon: <Megaphone size={19} />,
    groups: [
      { title: 'Brand & Design', items: ['Brand identity', 'UI / UX design', 'Creative direction'] },
      { title: 'Marketing', items: ['Performance marketing', 'Search engine optimization', 'Social media management'] },
      { title: 'Content Production', items: ['Video & animation', 'Photography', 'Social content'] },
    ],
  },
  {
    title: 'Corporate & B2B', icon: <Building2 size={19} />,
    groups: [
      { title: 'Business Support', items: ['Integrated service packages', 'Dedicated technical support', 'Project management'] },
      { title: 'Institutional Services', items: ['Facility management', 'Annual maintenance', 'Multi-site service coordination'] },
      { title: 'Partnerships', items: ['Corporate service plans', 'B2B technology solutions', 'Long-term operations support'] },
    ],
  },
];

const links = [
  { label: 'About', href: '#about' },
  { label: 'Industries', href: '#industries' },
  { label: 'Partners', href: '#partners' },
];

export default function Navbar() {
  const headerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const active = serviceCategories[activeCategory];

  const closeMenus = useCallback(() => {
    setOpen(false);
    setProductsOpen(false);
  }, []);

  useEffect(() => {
    if (!open && !productsOpen) return undefined;

    const handlePointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) closeMenus();
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeMenus();
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeMenus, open, productsOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="VersaCraft Limited home" onClick={closeMenus}>
          <span className="brand-mark"><img src={logo} alt="" /></span>
          <span className="brand-name">VersaCraft <small>Limited</small></span>
        </a>
        <div className={`nav-links${open ? ' nav-links-open' : ''}`}>
          <a href="#home" onClick={closeMenus}>Home</a>
          <button className={`nav-products${productsOpen ? ' is-open' : ''}`} type="button" aria-expanded={productsOpen} aria-controls="products-mega-menu" onClick={() => setProductsOpen(!productsOpen)}>
            Services <ChevronDown size={14} />
          </button>
          {links.map((link) => <a key={link.label} href={link.href} onClick={closeMenus}>{link.label}</a>)}
          <a className="mobile-login" href="#contact" onClick={closeMenus}>Let&apos;s talk <ArrowUpRight size={16} /></a>
        </div>
        <a className="nav-cta" href="#contact" onClick={closeMenus}>Let&apos;s talk <ArrowUpRight size={16} /></a>
        <button className="menu-toggle" type="button" onClick={() => { setOpen(!open); setProductsOpen(false); }} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {productsOpen && (
        <div className="products-mega-menu" id="products-mega-menu">
          <div className="mega-sidebar" role="tablist" aria-label="Product and service categories">
            {serviceCategories.map((category, index) => (
              <button className={`mega-category${activeCategory === index ? ' is-active' : ''}`} type="button" role="tab" id={`mega-tab-${index}`} aria-selected={activeCategory === index} aria-controls="mega-content" key={category.title} onClick={() => setActiveCategory(index)}>
                <span>{category.title}</span><ArrowRight size={15} />
              </button>
            ))}
          </div>
          <div className="mega-content" id="mega-content" role="tabpanel" aria-labelledby={`mega-tab-${activeCategory}`}>
            <div className="mega-mobile-heading">{active.icon}<h2>{active.title}</h2></div>
            <div className="mega-groups">
              {active.groups.map((group) => (
                <section className="mega-group" key={group.title}>
                  <h2>{group.title}</h2>
                  <ul>{group.items.map((item) => <li key={item}><a href="#contact" onClick={closeMenus}>{item}<ArrowUpRight size={13} /></a></li>)}</ul>
                </section>
              ))}
            </div>
            <div className="mega-footer">
              <span>Need help finding the right service?</span>
              <a href="#/services" onClick={closeMenus}>View all services <ArrowUpRight size={15} /></a>
              <a href="#contact" onClick={closeMenus}>Talk to our team <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
