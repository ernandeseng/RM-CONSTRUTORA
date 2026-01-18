import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import Projects from '@/components/sections/projects';
import Differentials from '@/components/sections/differentials';
import Process from '@/components/sections/process';
import Testimonials from '@/components/sections/testimonials';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Projects />
        <Differentials />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
