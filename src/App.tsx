import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Gameplay from './components/Gameplay';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-vault-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Gameplay />
      <Waitlist />
      <Footer />
    </div>
  );
}
