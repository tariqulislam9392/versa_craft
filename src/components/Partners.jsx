import { useRef, useState } from 'react';
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
  { src: articleStructureLogo, alt: 'Article Structure logo' },
  { src: liliputLogo, alt: 'Liliput Digital logo' },
  { name: 'Safe Green Agro' },
  { src: residenceAddressLogo, alt: 'Residence Address logo' },
  { src: quaziLogo, alt: 'Quazi logo' },
  { name: 'Ashraf Setu Shopping Complex' },
];

export default function Partners() {
  const tickerRef = useRef(null);
  const dragRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (event) => {
    if (event.button !== 0) return;

    const track = tickerRef.current?.querySelector('.ticker-track');
    const animation = track?.getAnimations()[0];
    const duration = Number(animation?.effect?.getTiming().duration);
    const distance = track?.scrollWidth / 2;
    if (!animation || !duration || !distance) return;

    event.preventDefault();
    animation.pause();
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startTime: Number(animation.currentTime) || 0,
      duration,
      distance,
      animation,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    event.preventDefault();
    const deltaX = event.clientX - drag.startX;
    const time = drag.startTime - (deltaX / drag.distance) * drag.duration;
    drag.animation.currentTime = ((time % drag.duration) + drag.duration) % drag.duration;
  };

  const handlePointerEnd = (event) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    dragRef.current = null;
    setIsDragging(false);
    drag.animation.play();
  };

  const handleKeyDown = (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;

    const track = tickerRef.current?.querySelector('.ticker-track');
    const animation = track?.getAnimations()[0];
    const duration = Number(animation?.effect?.getTiming().duration);
    const distance = track?.scrollWidth / 2;
    if (!animation || !duration || !distance) return;

    event.preventDefault();
    const deltaX = event.key === 'ArrowRight' ? -120 : 120;
    const time = (Number(animation.currentTime) || 0) - (deltaX / distance) * duration;
    animation.currentTime = ((time % duration) + duration) % duration;
  };

  return (
    <section className="partners" id="partners" aria-label="Trusted by industry leaders">
      <div className="partner-intro"><span className="eyebrow">TRUSTED BY INDUSTRY LEADERS</span><h2>Better work<br /><em>starts together.</em></h2><a href="#contact">Become a partner <ArrowUpRight size={15} /></a></div>
      <div
        className={`ticker-window${isDragging ? ' is-dragging' : ''}`}
        ref={tickerRef}
        role="group"
        aria-label="Client and partner logos. Drag to browse or use the arrow keys."
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onLostPointerCapture={handlePointerEnd}
        onKeyDown={handleKeyDown}
      >
        <div className="ticker-track">
          {[false, true].map((isDuplicate) => (
            <ul className="partner-logo-group" key={isDuplicate ? 'duplicate' : 'logos'} aria-hidden={isDuplicate}>
              {partnerLogos.map((logo) => (
                <li className="partner-logo-item" key={logo.alt || logo.name}>
                  {logo.src ? (
                    <img src={logo.src} alt={isDuplicate ? '' : logo.alt} loading="lazy" draggable={false} />
                  ) : (
                    <span className="partner-logo-name">{logo.name}</span>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="partner-footnote">SELECTED CLIENTS &amp; PARTNERS · VERSACRAFT LIMITED</div>
    </section>
  );
}
