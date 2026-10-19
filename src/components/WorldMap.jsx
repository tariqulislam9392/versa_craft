import { useState } from 'react';
import { Globe2 } from 'lucide-react';

export default function WorldMap() {
  const [spot, setSpot] = useState({ x: 500, y: 235 });
  const [isHovering, setIsHovering] = useState(false);

  const handlePointerMove = (event) => {
    const svg = event.currentTarget;
    const point = svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    const svgPoint = point.matrixTransform(svg.getScreenCTM().inverse());
    setSpot({ x: svgPoint.x, y: svgPoint.y });
  };

  return (
    <div className="map-art">
      <svg className="world-map" viewBox="0 0 1000 470" aria-label="Dotted world map. Hover over Bangladesh to learn about Versa Craft Limited." onPointerMove={handlePointerMove} onPointerEnter={() => setIsHovering(true)} onPointerLeave={() => setIsHovering(false)}>
        <defs>
          <pattern id="mapDots" width="8" height="8" patternUnits="userSpaceOnUse"><rect x="1" y="1" width="5" height="5" fill="#83aaff" opacity=".82" /></pattern>
          <g id="continentShapes">
            <path d="m50 129 30-31 54-22 47 10 30-24 51 6 34-25 55 9 19 25-12 22-37 4-12 29-31 14-18 35-37 1-10 28-33 12-15 38-30 6-10-27-24-13-4-30-24-12-19-27-26-6-14-24-28-9-5-19Z" />
            <path d="m242 252 31 2 27 21 17 39-8 38-23 18-10 44-20 36-17-22-3-37-18-29-4-37 15-32 13-41Z" />
            <path d="m449 111 26-27 42 3 22 12 38-4 22 12 42-8 39 13 29-1 36 17-7 19-31 8-27-6-22 16-32-8-13 20-29-8-19 16-23-6-18 20-20-8-14-19-22-3-15-19-29-11-8-23 13-15Z" />
            <path d="m536 228 34-9 29 18 24 38-7 41-18 31-12 43-22 21-23-23-6-36-23-23-8-34 12-42 20-25Z" />
            <path d="m711 291 30-18 43 8 30 16 43-5 45 17 27 27-13 22-41 4-34 17-35-12-28 14-33-13-39 8-23-22 17-24-10-20 21-19Z" />
            <path d="m822 106 30-15 38 9 23 21-9 21-33 11-34-14-16-17Z" />
          </g>
          <radialGradient id="cursorGlow" gradientUnits="userSpaceOnUse" cx={spot.x} cy={spot.y} r="104"><stop offset="0" stopColor="#d6ff92" stopOpacity="1"/><stop offset=".4" stopColor="#73bdff" stopOpacity=".72"/><stop offset="1" stopColor="#6198ff" stopOpacity="0"/></radialGradient>
        </defs>
        <g className="map-grid" stroke="#4266a5" strokeWidth=".7" opacity=".32"><path d="M0 78H1000M0 157H1000M0 235H1000M0 313H1000M0 392H1000M125 0V470M250 0V470M375 0V470M500 0V470M625 0V470M750 0V470M875 0V470" /></g>
        <use href="#continentShapes" fill="url(#mapDots)" />
        <use href="#continentShapes" className={`map-glow${isHovering ? ' map-glow-visible' : ''}`} fill="url(#cursorGlow)" />
        <g className="bangladesh-marker" tabIndex="0" role="button" aria-label="Versa Craft Limited is based in Bangladesh"><circle cx="665" cy="192" r="20" className="marker-ring"/><circle cx="665" cy="192" r="7" className="marker-core"/></g>
      </svg>
      <div className="map-tooltip"><span className="tooltip-overline">OUR HOME BASE</span><b>Versa Craft Limited</b><span>Dhaka, Bangladesh ↗</span></div>
      <div className="map-caption"><Globe2 size={14} /> ROOTED IN BANGLADESH · CONNECTED TO THE WORLD</div>
    </div>
  );
}
