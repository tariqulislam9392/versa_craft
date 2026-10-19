const partners = ['Your brand here', 'Made to move', 'Better together', 'Built on trust', 'Your brand here'];

export default function Partners() {
  return (
    <section className="partners" aria-label="Our partners">
      <div className="partner-intro"><span className="eyebrow">BETTER, TOGETHER</span><p>Good company makes<br />great things possible.</p></div>
      <div className="ticker-window"><div className="ticker-track">{[...partners, ...partners].map((name, index) => <span className="partner-name" key={`${name}-${index}`}><i />{name}</span>)}</div></div>
    </section>
  );
}
