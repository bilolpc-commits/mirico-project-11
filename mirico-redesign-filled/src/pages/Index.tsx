import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Solutions from '@/components/Solutions';
import Services from '@/components/Services';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Partners from '@/components/Partners';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <Features />
        <Solutions />
        <Services />
        <Projects />
        <About />
        <Partners />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
