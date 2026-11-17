import { ArrowUpRight } from 'lucide-react';
import haMeemLogo from '../assets/partners/ha-meem-group.png';
import allionLogo from '../assets/partners/allion-trade-international.png';
import uttaraLogo from '../assets/partners/uttara-abashan.png';
import islamiBankLogo from '../assets/partners/islami-bank.png';
import liraLogo from '../assets/partners/lira-group.png';
import diamondKeyLogo from '../assets/partners/diamond-key-apartments.png';
import goldenPropertyLogo from '../assets/partners/golden-property.png';
import ngglLogo from '../assets/partners/nggl-group.png';
import airportLogo from '../assets/partners/hazrat-shahjalal-airport.png';
import favLogo from '../assets/partners/fav-group.png';
import bpclLogo from '../assets/partners/bpcl.png';
import safaAgroLogo from '../assets/partners/safa-agro.png';
import residenceAddressLogo from '../assets/partners/residence-address.png';
import quaziLogo from '../assets/partners/quazi.png';
import articleStructureLogo from '../assets/partners/article-structure.png';
import liliputLogo from '../assets/partners/liliput-digital.png';

const partnerLogos = [
  { src: haMeemLogo, alt: 'HA-MEEM Group logo' },
  { src: allionLogo, alt: 'Allion Trade International logo' },
  { src: uttaraLogo, alt: 'Uttara Abashan logo' },
  { src: islamiBankLogo, alt: 'Islami Bank logo' },
  { src: liraLogo, alt: 'LIRA Group logo' },
  { src: diamondKeyLogo, alt: 'Diamond Key Apartments logo' },
  { src: goldenPropertyLogo, alt: 'Golden Property logo' },
  { src: ngglLogo, alt: 'NGGL Group logo' },
  { src: airportLogo, alt: 'Hazrat Shahjalal International Airport logo' },
  { src: favLogo, alt: 'FAV Group of Companies logo' },
  { src: bpclLogo, alt: 'BPCL logo' },
  { src: safaAgroLogo, alt: 'Safa Agro logo' },
  { src: residenceAddressLogo, alt: 'Residence Address logo' },
  { src: quaziLogo, alt: 'Quazi logo' },
  { src: articleStructureLogo, alt: 'Article Structure logo' },
  { src: liliputLogo, alt: 'Liliput Digital logo' },
  { name: 'Safe Green Agro' },
  { name: 'Ashraf Setu Shopping Complex' },
];

export default function Partners() {
  return (
    <section className="partners" id="partners" aria-label="Trusted by industry leaders">
      <div className="partner-intro"><span className="eyebrow">TRUSTED BY INDUSTRY LEADERS</span><h2>Better work<br /><em>starts together.</em></h2><a href="#contact">Become a partner <ArrowUpRight size={15} /></a></div>
      <ul className="partner-logo-grid" aria-label="Client and partner logos">
        {partnerLogos.map((logo) => (
          <li className="partner-logo-card" key={logo.alt || logo.name}>
            {logo.src ? (
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            ) : (
              <span className="partner-logo-name">{logo.name}</span>
            )}
          </li>
        ))}
      </ul>
      <div className="partner-footnote">SELECTED CLIENTS &amp; PARTNERS · VERSACRAFT LIMITED</div>
    </section>
  );
}
