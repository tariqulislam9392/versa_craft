import { ArrowUpRight } from 'lucide-react';
import partnerClients from '../assets/partner-clients.png';

const partners = [
  'HA-MEEM Group', 'Allion Trade International', 'Uttara Abashan Ltd.', 'Islami Bank',
  'LIRA Group', 'Diamond Key Apartments', 'Golden Property', 'NGGL Group',
  'Hazrat Shahjalal International Airport', 'FAV Group of Companies', 'BPCL',
  'Safa Agro Pvt. Ltd.', 'Article Structure Ltd.', 'Liliput Digital', 'Safe Green Agro',
  'Residence Address', 'Quazi', 'Ashraf Setu Shopping Complex',
];

export default function Partners() {
  const loop = [...partners, ...partners];
  return (
    <section className="partners" id="partners" aria-label="Trusted by industry leaders">
      <div className="partner-intro"><span className="eyebrow">TRUSTED BY INDUSTRY LEADERS</span><h2>Better work<br /><em>starts together.</em></h2><a href="#contact">Become a partner <ArrowUpRight size={15} /></a></div>
      <div className="ticker-window"><div className="ticker-track">{loop.map((name, index) => <span className="partner-name" key={`${name}-${index}`}><i aria-hidden="true" />{name}</span>)}</div></div>
      <div className="partner-logo-wall"><img src={partnerClients} alt="Client and partner logos featured in the VersaCraft corporate profile" /></div>
      <div className="partner-footnote">SELECTED CLIENTS &amp; PARTNERS · VERSACRAFT LIMITED</div>
    </section>
  );
}
