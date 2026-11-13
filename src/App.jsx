import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import WorldMap from './components/WorldMap';
import Hero from './components/Hero';
import Services from './components/Services';
import ServicesPage from './components/ServicesPage';
import Partners from './components/Partners';
import About from './components/About';
import Industries from './components/Industries';
import Approach from './components/Approach';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [isServicesPage, setIsServicesPage] = useState(() => window.location.hash === '#/services');

  useEffect(() => {
    const handleHashChange = () => {
      const targetId = window.location.hash.slice(1);
      const targetIsOnHomePage = targetId && targetId !== '/services' && !document.getElementById(targetId);

      setIsServicesPage(window.location.hash === '#/services');

      if (targetIsOnHomePage) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView());
        });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <Navbar />
      {isServicesPage ? (
        <ServicesPage />
      ) : (
        <>
          <WorldMap />
          <main style={{ position: 'relative', zIndex: 2 }}>
            <Hero />
            <About />
            <Services />
            <Industries />
            <Approach />
            <Partners />
          </main>
        </>
      )}
      <Footer />
    </>
  );
}
