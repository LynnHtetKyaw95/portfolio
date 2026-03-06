import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import ActivityWidget from '@/components/ActivityWidget';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ActivityWidget />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
