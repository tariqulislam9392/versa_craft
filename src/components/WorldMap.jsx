// Natural Earth world geometry in a Robinson projection.
import worldMapPaths from '../assets/world-map-paths.json';

export default function WorldMap() {
  return (
    <section className="map-art" aria-label="Versa Craft Limited worldwide">
      <svg className="world-map-svg" viewBox="0 0 1000 507" role="img" aria-label="World map with Bangladesh highlighted" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="land-shadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#8195a7" floodOpacity=".45" />
          </filter>
        </defs>
        <g fill="#fff" stroke="#fff" strokeWidth=".45" strokeLinejoin="round" filter="url(#land-shadow)">
          {worldMapPaths.map((path, index) => <path key={index} d={path} />)}
        </g>
      </svg>
      <button className="bangladesh-marker" type="button" aria-label="Versa Craft Limited location: Dhaka, Bangladesh">
        <span className="marker-ring" />
        <span className="marker-core" />
      </button>
      <div className="map-tooltip">
        <span>OUR LOCATION</span>
        <strong>Versa Craft Limited</strong>
        <small>Dhaka, Bangladesh</small>
      </div>
    </section>
  );
}
