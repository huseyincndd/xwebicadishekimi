import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TreatmentProcess from './components/TreatmentProcess';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        
        <Services />
        <About />
        <TreatmentProcess />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
