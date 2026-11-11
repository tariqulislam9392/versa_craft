import Navbar from './components/Navbar';
import WorldMap from './components/WorldMap';
import Hero from './components/Hero';
import Services from './components/Services';
import Partners from './components/Partners';
import About from './components/About';
import Industries from './components/Industries';
import Approach from './components/Approach';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <WorldMap />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <Approach />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
