import { useState } from 'react';

export default function WorldMap() {
  const [activeSquare, setActiveSquare] = useState(null);

  const handlePointerMove = (event) => {
    if (!event.target.classList.contains('map-hit-area')) {
      setActiveSquare(null);
      return;
    }

    const point = event.currentTarget.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    const local = point.matrixTransform(event.currentTarget.getScreenCTM().inverse());
    setActiveSquare({
      x: Math.floor((local.x - 1) / 8) * 8 + 1,
      y: Math.floor((local.y - 1) / 8) * 8 + 1,
    });
  };

  return (
    <section className="map-art" aria-label="Versa Craft Limited worldwide">
      <svg className="world-map" viewBox="0 0 1000 470" role="img" aria-label="World map with Bangladesh highlighted" onPointerMove={handlePointerMove} onPointerLeave={() => setActiveSquare(null)}>
        <defs>
          <pattern id="mapDots" width="8" height="8" patternUnits="userSpaceOnUse">
            <rect className="map-square-light" x="1" y="1" width="5" height="5" rx=".4" fill="#83aaff" />
          </pattern>
          <g id="continentShapes">
            <path d="m50 129 30-31 54-22 47 10 30-24 51 6 34-25 55 9 19 25-12 22-37 4-12 29-31 14-18 35-37 1-10 28-33 12-15 38-30 6-10-27-24-13-4-30-24-12-19-27-26-6-14-24-28-9-5-19Z" />
            <path d="m242 252 31 2 27 21 17 39-8 38-23 18-10 44-20 36-17-22-3-37-18-29-4-37 15-32 13-41Z" />
            <path d="m449 111 26-27 42 3 22 12 38-4 22 12 42-8 39 13 29-1 36 17-7 19-31 8-27-6-22 16-32-8-13 20-29-8-19 16-23-6-18 20-20-8-14-19-22-3-15-19-29-11-8-23 13-15Z" />
            <path d="m536 228 34-9 29 18 24 38-7 41-18 31-12 43-22 21-23-23-6-36-23-23-8-34 12-42 20-25Z" />
            <path d="m711 291 30-18 43 8 30 16 43-5 45 17 27 27-13 22-41 4-34 17-35-12-28 14-33-13-39 8-23-22 17-24-10-20 21-19Z" />
            <path d="m822 106 30-15 38 9 23 21-9 21-33 11-34-14-16-17Z" />
          </g>
        </defs>
        <g className="map-grid" aria-hidden="true">
          <path d="M0 78H1000M0 157H1000M0 235H1000M0 313H1000M0 392H1000M125 0V470M250 0V470M375 0V470M500 0V470M625 0V470M750 0V470M875 0V470" />
        </g>
        <use href="#continentShapes" className="map-hit-area" fill="transparent" />
        <use href="#continentShapes" className="map-land" fill="url(#mapDots)" />
        {activeSquare && <rect className="map-hover-square" x={activeSquare.x} y={activeSquare.y} width="5" height="5" rx=".4" />}
        <g className="bangladesh-marker" tabIndex="0" aria-label="Versa Craft Limited location: Dhaka, Bangladesh">
          <circle cx="665" cy="192" r="18" className="marker-ring" />
          <circle cx="665" cy="192" r="6" className="marker-core" />
        </g>
      </svg>
      <div className="map-tooltip">
        <span>OUR LOCATION</span>
        <strong>Versa Craft Limited</strong>
        <small>Dhaka, Bangladesh</small>
      </div>
      <div className="map-caption">ROOTED IN BANGLADESH · CONNECTED TO THE WORLD</div>
    </section>
  );
}
